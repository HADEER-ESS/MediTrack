import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Ionicons } from "@react-native-vector-icons/ionicons"
import ScreenStack from './ScreenStack'
import { History, Notifications } from '../screens'
import { RootParamList } from './types'
import COLORS from '../constant/colors'


const Tab = createBottomTabNavigator<RootParamList>()

const RootStack = () => {
    return (
        <Tab.Navigator
            initialRouteName='home_flow'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.PRIMARY,
                tabBarInactiveTintColor: COLORS.SUBTLE,
            }}
        >
            <Tab.Screen
                name='history'
                options={{
                    title: "History",
                    tabBarIcon: ({ color, size }) => (<Ionicons name='calendar' color={color} size={size} />)
                }}
                component={History}
            />
            <Tab.Screen
                name='home_flow'
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (<Ionicons name='home' color={color} size={size} />)
                }}
                component={ScreenStack}
            />
            <Tab.Screen
                name='norification'
                options={{
                    title: "Notifications",
                    tabBarIcon: ({ color, size }) => (<Ionicons name='notifications' color={color} size={size} />)
                }}
                component={Notifications}
            />
        </Tab.Navigator>
    )
}

export default RootStack
