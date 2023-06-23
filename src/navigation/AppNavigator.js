import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpForm from '../screens/auth/reg_form'
import AuthForm from '../screens/auth/auth_form'
import MainScreen from '../screens/main/main_screen';
import AccountScreen from '../screens/account/account_screen';
import ExercisesScreen from '../screens/exercises/exercises_screen';
import ExerciseInfo from '../screens/exercises/exercise_info';

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
        <Stack.Screen
 
        options={{
          
          gestureEnabled: false,
          headerBackVisible: false,
          headerShown: true, 
          headerTitle: 'Активность',
            }} name = "Main" component= {MainScreen}/>

        <Stack.Screen options={{
          
          gestureEnabled: false,
          headerBackVisible: false,
          headerShown: true, 
          headerTitle: 'Аккаунт',
            }} name = "Account" component= {AccountScreen}/>

          <Stack.Screen

              options={{
                        
                gestureEnabled: false,
                headerBackVisible: false,
                headerShown: true, 
                headerTitle: 'Упражнения',
              }}
              name = "Exercises" 
              component= {ExercisesScreen}

          />

            <Stack.Screen

            options={{
                      
              
              headerShown: true, 
              headerTitle: 'Информация об упражнении',
            }}
            name = "ExerciseInfo" 
            component= {ExerciseInfo}

            />

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})