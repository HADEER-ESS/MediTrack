import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import COLORS from '../constant/colors'

type props = {
    title: string,
    action: () => void
}


const CustomeActionBtn = ({ title, action }: props) => {
    return (
        <TouchableOpacity
            style={styles.btnContainer}
            accessibilityRole='button'
            onPress={action}>
            <Text style={styles.btnStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomeActionBtn

const styles = StyleSheet.create({
    btnContainer: {
        alignSelf: 'center',
        backgroundColor: COLORS.PRIMARY,
        borderRadius: 15,
        marginVertical: 20
    },
    btnStyle: {
        color: COLORS.CARD,
        fontSize: 24,
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
})
