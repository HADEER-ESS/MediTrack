import React from 'react'
import { StyleSheet, Text } from 'react-native'
import COLORS from '../constant/colors'

type props = {
    msg: string,
    type: "error" | "success"
}

const ErrorText = ({ msg, type }: props) => {
    return (
        <Text style={[styles.textStyle, { color: type === 'error' ? COLORS.ALERT : COLORS.SECONDARY }]}>
            {msg}
        </Text>
    )
}

export default ErrorText

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 14,
        marginHorizontal: 20,
    }
})