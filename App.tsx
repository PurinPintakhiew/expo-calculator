import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { thousandsSeparator } from "thousands-separator-js";
import { Button } from "components/Button";

type OperatorType = 'plus' | 'minus' | 'multiply' | 'divide' | '';

export default function App() {
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState<OperatorType>('');
  const [operand, setOperand] = useState(0);

  const onHandelReceiveValue = (val: number) => {
    try {
      if (operator) {
        setOperand(Number(operand.toString() + val.toString()));
      } else {
        setResult(Number(result.toString() + val.toString()));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onHandelDel = () => {
    try {
      if (operand) {
        const arrResult = operand.toString().split("");
        if (arrResult.length > 0) {
          arrResult.pop();
          setOperand(Number(arrResult.join("") || 0));
        }
      } else if (result) {
        const arrResult = result.toString().split("");
        if (arrResult.length > 0) {
          arrResult.pop();
          setResult(Number(arrResult.join("") || 0));
        }
      } else {
        onHandelClear();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onHandelClear = () => {
    try {
      setResult(0);
      setOperand(0);
      setOperator('');
    } catch (error) {
      console.error(error);
    }
  };

  const onHandelCalculator = () => {
    try {
      switch (operator) {
        case 'plus':
          setResult(Number(result + operand));
          break;
        case 'minus':
          setResult(Number(result - operand));
          break;
        case 'multiply':
          setResult(Number(result * operand));
          break;
        case 'divide':
          setResult(Number(result / operand));
          break;
      }
      setOperand(0);
      setOperator('');
    } catch (error) {
      console.error(error);
    }
  };

  const operatorSymbol = (op: OperatorType) => {
    if (op === 'plus') {
      return '+';
    } else if (op === 'minus') {
      return '−';
    } else if (op === 'multiply') {
      return '×';
    } else if (op === 'divide') {
      return '÷';
    } else {
      return '';
    }
  };

  const onHandleDecimal = () => {
    try {
      if (operand >= 0) {
        const numberStr: string = operand.toString();
        const [integerPart, decimalPart] = numberStr?.split(".");
        if (decimalPart) {
          console.log("operand has decimal");
        } else {
          console.log("operand not has decimal");
        }
      } else if (result >= 0) {
        const numberStr: string = result.toString();
        const [integerPart, decimalPart] = numberStr?.split(".");
        if (decimalPart) {
          console.log("result has decimal");
        } else {
          console.log("result not has decimal");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="auto" />
      <View className="flex-1 px-3 py-5">
        {/* Display */}
        <View className="h-1/4 bg-white rounded-2xl shadow-md p-4 justify-end items-end mb-3">
          <Text
            className="text-5xl font-bold text-gray-900"
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {
              operand ?
                `${thousandsSeparator(result)} ${operatorSymbol(operator)} ${thousandsSeparator(operand)}`
                :
                thousandsSeparator(result)
            }
          </Text>
        </View>

        {/* Buttons */}
        <View className="flex flex-row flex-wrap justify-center">
          <Button label="AC" onPress={onHandelClear} type="action" />
          <Button label="( )" type="action" />
          <Button label="%" type="action" />
          <Button label="÷" type="operator" onPress={() => setOperator('divide')} />

          <Button label="7" onPress={() => onHandelReceiveValue(7)} />
          <Button label="8" onPress={() => onHandelReceiveValue(8)} />
          <Button label="9" onPress={() => onHandelReceiveValue(9)} />
          <Button label="×" type="operator" onPress={() => setOperator('multiply')} />

          <Button label="4" onPress={() => onHandelReceiveValue(4)} />
          <Button label="5" onPress={() => onHandelReceiveValue(5)} />
          <Button label="6" onPress={() => onHandelReceiveValue(6)} />
          <Button label="−" type="operator" onPress={() => setOperator('minus')} />

          <Button label="1" onPress={() => onHandelReceiveValue(1)} />
          <Button label="2" onPress={() => onHandelReceiveValue(2)} />
          <Button label="3" onPress={() => onHandelReceiveValue(3)} />
          <Button label="+" type="operator" onPress={() => setOperator('plus')} />

          <Button label="." onPress={() => onHandleDecimal()} />
          <Button label="0" onPress={() => onHandelReceiveValue(0)} />
          <Button onPress={onHandelDel} icon="backspace" type="action" />
          <Button label="=" type="operator" onPress={() => onHandelCalculator()} />
        </View>
      </View>
    </SafeAreaView>
  );
}
