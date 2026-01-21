import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import ScreenStack from './ScreenStack'
import { History, Notifications } from '../screens'
import { RootParamList } from './types'


const Tab = createBottomTabNavigator<RootParamList>()

const RootStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='home_flow'
                component={ScreenStack}
            />
            <Tab.Screen
                name='history'
                component={History}
            />
            <Tab.Screen
                name='norification'
                component={Notifications}
            />
        </Tab.Navigator>
    )
}

export default RootStack
