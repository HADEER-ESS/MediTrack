import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type props = {
    title: string,
    action: () => void
}


const CustomeActionBtn = ({ title, action }: props) => {
    return (
        <TouchableOpacity
            onPress={action}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomeActionBtn
