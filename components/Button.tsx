import { Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Button = ({
    label,
    onPress,
    type = "default",
    icon,
    disabled = false,
}: {
    label?: string;
    onPress?: () => void;
    type?: "default" | "operator" | "action";
    icon?: keyof typeof FontAwesome5.glyphMap;
    disabled?: boolean
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
            className={`w-1/5 h-1/5 aspect-square m-1 rounded-2xl shadow-md justify-center items-center ${bg}`}
            activeOpacity={0.6}
            disabled={disabled}
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
