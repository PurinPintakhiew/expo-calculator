import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity, Text, View, SafeAreaView, ScrollView } from "react-native";
import { thousandsSeparator } from "thousands-separator-js";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  const [result, setResult] = useState(0);

  const onHandelCalculator = (val: number) => {
    try {
      const newResult = result.toString() + val.toString();
      setResult(Number(newResult));
    } catch (error) {
      console.error(error);
    }
  };

  const onHandelDel = () => {
    try {
      const arrResult = result.toString().split("");
      if (arrResult.length > 0) {
        arrResult.pop();
        setResult(Number(arrResult.join("") || 0));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onHandelClear = () => {
    try {
      setResult(0);
    } catch (error) {
      console.error(error);
    }
  };

  const Button = ({
    label,
    onPress,
    type = "default",
    icon,
  }: {
    label?: string;
    onPress?: () => void;
    type?: "default" | "operator" | "action";
    icon?: keyof typeof FontAwesome5.glyphMap;
  }) => {
    const bg =
      type === "operator"
        ? "bg-orange-400"
        : type === "action"
          ? "bg-gray-300"
          : "bg-white";

    const textColor =
      type === "operator" ? "text-white" : "text-gray-800";

    return (
      <TouchableOpacity
        onPress={onPress}
        className={`w-1/5 aspect-square m-1 rounded-2xl shadow-md justify-center items-center ${bg}`}
        activeOpacity={0.7}
      >
        {icon ? (
          <FontAwesome5 name={icon} size={28} color={type === "operator" ? "#fff" : "#333"} />
        ) : (
          <Text className={`text-2xl font-bold ${textColor}`}>{label}</Text>
        )}
      </TouchableOpacity>
    );
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
            {thousandsSeparator(result)}
          </Text>
        </View>

        {/* Buttons */}
        <View className="flex flex-row flex-wrap justify-center">
          <Button label="AC" onPress={onHandelClear} type="action" />
          <Button label="( )" type="action" />
          <Button label="%" type="action" />
          <Button label="÷" type="operator" />

          <Button label="7" onPress={() => onHandelCalculator(7)} />
          <Button label="8" onPress={() => onHandelCalculator(8)} />
          <Button label="9" onPress={() => onHandelCalculator(9)} />
          <Button label="×" type="operator" />

          <Button label="4" onPress={() => onHandelCalculator(4)} />
          <Button label="5" onPress={() => onHandelCalculator(5)} />
          <Button label="6" onPress={() => onHandelCalculator(6)} />
          <Button label="−" type="operator" />

          <Button label="1" onPress={() => onHandelCalculator(1)} />
          <Button label="2" onPress={() => onHandelCalculator(2)} />
          <Button label="3" onPress={() => onHandelCalculator(3)} />
          <Button label="+" type="operator" />

          <Button label="." />
          <Button label="0" onPress={() => onHandelCalculator(0)} />
          <Button onPress={onHandelDel} icon="backspace" type="action" />
          <Button label="=" type="operator" />
        </View>
      </View>
    </SafeAreaView>
  );
}
