import { StyleSheet } from "react-native";
import { myColors } from "./Colors"; 

export const Styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: myColors.blue,
    },
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.blue,
        justifyContent: "center",
        alignItems: "center",
    },
    smallText: {
        fontSize: 32,
        color: myColors.white,
    }

})