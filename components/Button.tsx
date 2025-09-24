import { Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

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
            activeOpacity={0.8}
        >
            {icon ? (
                <FontAwesome5 name={icon} size={28} color={type === "operator" ? "#fff" : "#333"} />
            ) : (
                <Text className={`text-2xl font-bold ${textColor}`}>{label}</Text>
            )}
        </TouchableOpacity>
    );
};

export { Button }
