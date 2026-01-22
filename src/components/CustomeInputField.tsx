import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

type props = {
  placeHolder: string,
  value: string,
  action: (data: string) => void
}

const CustomeInputField = ({ placeHolder, value, action }: props) => {
  return (
    <View>
      <TextInput
        placeholder={placeHolder}
        value={value}
        onChangeText={action}
      />
    </View>
  )
}

export default CustomeInputField

const styles = StyleSheet.create({})
