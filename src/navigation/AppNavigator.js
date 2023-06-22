import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpForm from '../screens/auth/reg_form'
import AuthForm from '../screens/auth/auth_form'

const WhiteBGTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white'
    },
  };
  
  
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer theme = {WhiteBGTheme}>
      <Stack.Navigator>
        <Stack.Screen  options={{headerShown: false}} name = "Login" component={AuthForm}/>
        <Stack.Screen options={{headerShown: false}} name = "SignUp" component= {SignUpForm}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})