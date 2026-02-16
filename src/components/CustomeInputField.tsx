import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import COLORS from '../constant/colors'
import ErrorText from './ErrorText'

type props = {
  placeHolder: string,
  value: string,
  error: boolean,
  action: (data: string) => void
}

const CustomeInputField = ({ placeHolder, value, error, action }: props) => {
  return (
    <>
      <View style={[styles.inputContainer, { borderColor: error ? COLORS.ALERT : COLORS.PRIMARY }]}>
        <TextInput
          placeholder={placeHolder}
          value={value}
          style={styles.inputStyle}
          onChangeText={action}
        />
      </View>
      {error && <ErrorText msg="This field is required" type="error" />}
    </>
  )
}

export default CustomeInputField

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 5
  },
  inputStyle: {
    color: COLORS.TEXT,
    fontSize: 16
  }
})
