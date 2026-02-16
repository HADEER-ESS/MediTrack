import { StyleSheet } from "react-native";
import COLORS from "./colors";

const mainStyle = StyleSheet.create({
    screenView: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: COLORS.NEUTRAL,
    },
    mainText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.PRIMARY,
        // textAlign: 'center',
        marginBottom: 10,
    },
    subText: {}
})

export default mainStyle