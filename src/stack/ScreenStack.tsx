
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, MedicationDetails, MedicationNotes, MedicationReminder, MedicationSchedual } from '../screens'
import { ScreenParamList } from './types'


const Stack = createNativeStackNavigator<ScreenParamList>()

const ScreenStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='home'
                component={Home}
            />
            <Stack.Screen
                name='details'
                component={MedicationDetails}
            />
            <Stack.Screen
                name='schedule'
                component={MedicationSchedual}
            />
            <Stack.Screen
                name='reminder'
                component={MedicationReminder}
            />
            <Stack.Screen
                name='notes'
                component={MedicationNotes}
            />
        </Stack.Navigator>
    )
}

export default ScreenStack
