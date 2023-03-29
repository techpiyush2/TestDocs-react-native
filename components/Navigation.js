import  NavigationContainer  from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import ListData from './ListData';
import Form from './Form';
const Stack = createNativeStackNavigator()
const Navigation = () => {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= 'Home' component = {ListData}/>
        <Stack.Screen name= 'List' component = {Form}/>
      </Stack.Navigator>
     </NavigationContainer>
    )
}

export default Navigation