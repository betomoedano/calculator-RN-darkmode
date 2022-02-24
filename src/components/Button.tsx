import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
}

export default function Button({ title, onPress }: ButtonProps) {
    return (
        <TouchableOpacity style={Styles.btnBlue} onPress={onPress}>
            <Text style={Styles.smallText}>{title}</Text>
        </TouchableOpacity>
    );
}