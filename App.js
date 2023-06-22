import { StatusBar } from 'expo-status-bar';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import AuthForm from './src/screens/auth/auth_form';
import appstyles from './App_styles';

import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './src/navigation/AppNavigator';



const screenWidth = Dimensions.get('window').width;

const Stack = createNativeStackNavigator();

const styles = appstyles

const WhiteBGTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};



console.log(screenWidth)
export default function App() {
  return (
    /*
    <View style ={styles.auth_screen}>
      <View></View>
      <AuthForm></AuthForm>
      <View style = {styles.bottom_nav}>
        <Text style = {styles.bottom_text}>
         Copyright rus_VLP 2023
        </Text>
      </View>
    </View>
    */
    /*<NavigationContainer theme = {WhiteBGTheme}>
      <Stack.Navigator>
        <Stack.Screen  options={{headerShown: false}} name = "Login" component={AuthForm}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer> */
    <AppNavigator/>

  );
}




