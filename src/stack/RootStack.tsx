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
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: COLORS.PRIMARY,
                tabBarInactiveTintColor: COLORS.SUBTLE,
                tabBarIcon: ({ color, size }) => {
                    let iconName: any

                    switch (route.name) {
                        case 'history':
                            iconName = 'calendar'
                            break
                        case 'home_flow':
                            iconName = 'home'
                            break
                        case 'notification':
                            iconName = 'notifications'
                            break
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}
        >
            <Tab.Screen
                name='history'
                options={{
                    title: "History",
                }}
                component={History}
            />
            <Tab.Screen
                name='home_flow'
                options={{
                    title: "Home",
                }}
                component={ScreenStack}
            />
            <Tab.Screen
                name='notification'
                options={{
                    title: "Notifications",
                }}
                component={Notifications}
            />
        </Tab.Navigator>
    )
}

export default RootStack
