import { StatusBar } from 'expo-status-bar';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import AuthForm from './auth/auth_form';

const screenWidth = Dimensions.get('window').width;

console.log(screenWidth)
export default function App() {
  return (
    /*<ScrollView contentContainerStyle = {styles.container}>
      <View style = {styles.text}>
        <Text>Текст бла бла</Text>
      </View>
      <View style = {styles.text}>
        <Text>Текст бла бла</Text>
      </View>
    </ScrollView> */
   
    <AuthForm></AuthForm>
      

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center', 
    justifyContent: 'center'
  }, 

  textInput: {
    borderRadius:5,
    paddingLeft: 5,
    height: 30,
    width: screenWidth * 0.5,
    borderWidth: 1,
    borderStyle: 'solid', 
    borderColor: '#ccc'
  }

});
