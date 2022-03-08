import Button from "./Button";
import { View } from "react-native";
import { Styles } from "../styles/GlobalStyles";

export default function MyKeyboard() {
    return (
        <View style={Styles.viewBottom}>
            <View style={Styles.row}>
                <Button title="C" isGray onPress={() => alert("Hello")} />
                <Button title="+/-" isGray onPress={() => alert("Hello")} />
                <Button title="％" isGray onPress={() => alert("Hello")} />
                <Button title="÷" isBlue onPress={() => alert("Hello")} />
            </View>
            <View style={Styles.row}>
                <Button title="7" onPress={() => alert("Hello")} />
                <Button title="8" onPress={() => alert("Hello")} />
                <Button title="9" onPress={() => alert("Hello")} />
                <Button title="×" isBlue onPress={() => alert("Hello")} />
            </View>
            <View style={Styles.row}>
                <Button title="4" onPress={() => alert("Hello")} />
                <Button title="5" onPress={() => alert("Hello")} />
                <Button title="6" onPress={() => alert("Hello")} />
                <Button title="-" isBlue onPress={() => alert("Hello")} />
            </View>
            <View style={Styles.row}>
                <Button title="1" onPress={() => alert("Hello")} />
                <Button title="2" onPress={() => alert("Hello")} />
                <Button title="3" onPress={() => alert("Hello")} />
                <Button title="+" isBlue onPress={() => alert("Hello")} />
            </View>
            <View style={Styles.row}>
                <Button title="." onPress={() => alert("Hello")} />
                <Button title="0" onPress={() => alert("Hello")} />
                <Button title="⌫" onPress={() => alert("Hello")} />
                <Button title="=" isBlue onPress={() => alert("Hello")} />
            </View>
        </View>
    )
} 