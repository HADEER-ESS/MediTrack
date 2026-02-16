import React, { useState } from 'react'
import { Text, View } from 'react-native'
import mainStyle from '../constant/styles'
import CustomeInputField from '../components/CustomeInputField'
import CustomeActionBtn from '../components/CustomeActionBtn'
import useInputValidation from '../utils/useInputValidation'
import { useNavigation } from '@react-navigation/native'

const OnboardingScreen = () => {
    const navigation = useNavigation()
    const [userName, setUserName] = useState<string>('')
    const [showError, setShowError] = useState<boolean>(false)
    const { validateName, storeNameData } = useInputValidation()

    const handleInputChange = (txt: string) => {
        if (validateName(txt)) {
            storeNameData(txt)
            navigation.navigate('home' as never)
        } else {
            setShowError(true)
        }
    }
    return (
        <View style={mainStyle.screenView}>
            <Text style={mainStyle.mainText}>
                Manage your medications{`\n`}
                with ease and precision
            </Text>
            {/* TextInput for user Name */}
            <CustomeInputField
                placeHolder='Enter your name'
                value={userName}
                error={showError}
                action={(txt) => setUserName(txt)}
            />
            {/* Get start btn for navigation and submite (store) user name */}
            <CustomeActionBtn
                title='Get Started'
                action={() => handleInputChange(userName)}
            />
        </View>
    )
}

export default OnboardingScreen
