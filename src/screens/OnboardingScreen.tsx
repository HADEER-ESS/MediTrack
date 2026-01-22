import React, { useState } from 'react'
import { Text, View } from 'react-native'
import mainStyle from '../constant/styles'
import { userInfo } from '../utils/db'
import CustomeInputField from '../components/CustomeInputField'
import CustomeActionBtn from '../components/CustomeActionBtn'

const OnboardingScreen = () => {
    const [userName, setUserName] = useState<string>("")
    const storeUserInfo = (name: string) => {
        setUserName(name)
        // Store user info in MMKV
        userInfo.set("user_name", userName)
    }
    return (
        <View style={mainStyle.screenView}>
            <Text style={mainStyle.mainText}>
                Manage your medications
                with ease and precision
            </Text>
            {/* TextInput for user Name */}
            <CustomeInputField
                placeHolder='Enter your name'
                value={userName}
                action={(txt) => storeUserInfo(txt)}
            />
            {/* Get start btn for navigation and submite (store) user name */}
            <CustomeActionBtn
                title='Get Started'
                action={() => console.log('Get Started Pressed')}
            />
        </View>
    )
}

export default OnboardingScreen
