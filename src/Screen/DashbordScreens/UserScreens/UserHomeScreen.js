import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
const UserHomeScreen = () => {

    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Screen1} options={{headerShown: false}}/>
      <Tab.Screen name="NearBy" component={Screen2} options={{headerShown: false}}/>
      <Tab.Screen name="reservation" component={Screen3} options={{headerShown: false}}/>
      <Tab.Screen name="Profile" component={Screen4} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}

export default UserHomeScreen

