import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { thousandsSeparator } from "thousands-separator-js";
import { Button } from "components/Button";

type OperatorType = 'plus' | 'minus' | 'multiply' | 'divide' | '';

export default function App() {
  const [result, setResult] = useState<number>(0);
  const [operator, setOperator] = useState<OperatorType>('');
  const [operand, setOperand] = useState<number>(0);
  const [resultStr, setResultStr] = useState("0");
  const [operandStr, setOperandStr] = useState("");
  const [expression, setExpression] = useState("");

  const handleReceiveValue = (val: number) => {
    try {
      if (operator) {
        const newStr = operandStr ? operandStr + val : val.toString();
        setOperandStr(newStr);
        setOperand(parseFloat(newStr));
      } else {
        const newStr = resultStr !== "0" ? resultStr + val : val.toString();
        setResultStr(newStr);
        setResult(parseFloat(newStr));
      }
    } catch (error) {
      console.error('handleReceiveValue error:', error);
    }
  };

  const handleDel = () => {
    try {
      if (operand) {
        const newVal = operand.toString().slice(0, -1);
        setOperand(Number(newVal) || 0);
      } else if (result) {
        const newVal = result.toString().slice(0, -1);
        setResult(Number(newVal) || 0);
      } else {
        handleClear();
      }
    } catch (error) {
      console.error('handleDel error:', error);
    }
  };

  const handleClear = () => {
    setResult(0);
    setOperand(0);
    setOperator('');
    setOperandStr("");
    setResultStr("0");
  };

  const handleCalculator = () => {
    try {
      const num1 = parseFloat(resultStr);
      const num2 = parseFloat(operandStr || "0");
      let calcResult = num1;

      switch (operator) {
        case "plus":
          calcResult = num1 + num2;
          break;
        case "minus":
          calcResult = num1 - num2;
          break;
        case "multiply":
          calcResult = num1 * num2;
          break;
        case "divide":
          calcResult = num2 !== 0 ? num1 / num2 : 0;
          break;
      }
      setResult(calcResult);
      setResultStr(calcResult.toString());
      setOperand(0);
      setOperandStr("");
      setOperator("");
    } catch (error) {
      console.error('handleCalculator error:', error);
    }
  };


  const operatorSymbol = (op: OperatorType) => {
    const map: Record<OperatorType, string> = {
      plus: '+',
      minus: '−',
      multiply: '×',
      divide: '÷',
      '': '',
    };
    return map[op];
  };

  const handleDecimal = () => {
    try {
      if (operator) {
        if (!operandStr.includes(".")) {
          const newStr = operandStr ? operandStr + "." : "0.";
          setOperandStr(newStr);
        }
      } else {
        if (!resultStr.includes(".")) {
          const newStr = resultStr ? resultStr + "." : "0.";
          setResultStr(newStr);
        }
      }
    } catch (error) {
      console.error('handleDecimal error:', error);
    }
  };

  const handlePercent = () => {
    try {
      if (expression) {
        const newExp = expression + "/100";
        setExpression(newExp);
      } else if (result) {
        setResult(result / 100);
        setResultStr((result / 100).toString());
      }
    } catch (error) {
      console.error('handlePercent error:', error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="auto" />
      <View className="flex-1 px-3 py-5">
        {/* Display */}
        <View className="h-1/4 bg-white rounded-2xl shadow-md p-4 justify-end items-end mb-4">
          <Text
            className="text-5xl font-bold text-gray-900"
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {operand
              ? `${thousandsSeparator(result)} ${operatorSymbol(operator)} ${thousandsSeparator(operand)}`
              : thousandsSeparator(result)}
          </Text>
        </View>

        {/* Buttons */}
        <View className="flex flex-row flex-wrap justify-center">
          <Button label="AC" onPress={handleClear} type="action" />
          <Button label="( )" type="action" />
          <Button label="%" type="action" onPress={handlePercent}/>
          <Button label="÷" type="operator" onPress={() => setOperator('divide')} />

          <Button label="7" onPress={() => handleReceiveValue(7)} />
          <Button label="8" onPress={() => handleReceiveValue(8)} />
          <Button label="9" onPress={() => handleReceiveValue(9)} />
          <Button label="×" type="operator" onPress={() => setOperator('multiply')} />

          <Button label="4" onPress={() => handleReceiveValue(4)} />
          <Button label="5" onPress={() => handleReceiveValue(5)} />
          <Button label="6" onPress={() => handleReceiveValue(6)} />
          <Button label="−" type="operator" onPress={() => setOperator('minus')} />

          <Button label="1" onPress={() => handleReceiveValue(1)} />
          <Button label="2" onPress={() => handleReceiveValue(2)} />
          <Button label="3" onPress={() => handleReceiveValue(3)} />
          <Button label="+" type="operator" onPress={() => setOperator('plus')} />

          <Button label="." onPress={handleDecimal} />
          <Button label="0" onPress={() => handleReceiveValue(0)} />
          <Button onPress={handleDel} icon="backspace" type="action" />
          <Button label="=" type="operator" onPress={handleCalculator} />
        </View>
      </View>
    </SafeAreaView>
  );
}
