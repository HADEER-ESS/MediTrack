import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import COLORS from '../constant/colors'

type AddBtnProps = {
    onPress: () => void
}

const AddBtn = ({ onPress }: AddBtnProps) => {
    return (
        <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
            <Text style={styles.txtBtnStyle}>+</Text>
        </TouchableOpacity>
    )
}

export default AddBtn

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: COLORS.PRIMARY,
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtBtnStyle: {
        color: COLORS.CARD,
        fontSize: 24,
        fontWeight: 'bold',
    }
})