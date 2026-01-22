
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Medication, Onboarding } from '../screens'
import { ScreenParamList } from './types'


const Stack = createNativeStackNavigator<ScreenParamList>()

const ScreenStack = () => {
    return (
        <Stack.Navigator>
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
