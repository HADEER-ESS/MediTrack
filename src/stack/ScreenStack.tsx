
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Medication, Onboarding } from '../screens'
import { ScreenParamList } from './types'
import { userInfo } from '../utils/db'


const Stack = createNativeStackNavigator<ScreenParamList>()

const ScreenStack = () => {
    const isAutherized = userInfo.getString("user_name") !== undefined
    return (
        <Stack.Navigator
            initialRouteName={isAutherized ? "home" : "onbording"}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='onbording'
                component={Onboarding}
            />
            <Stack.Screen
                name='home'
                component={Home}
            />
            <Stack.Screen
                name='medication'
                component={Medication}
            />
        </Stack.Navigator>
    )
}

export default ScreenStack
