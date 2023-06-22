import {React, Component, useState} from 'react'
import {Button, Text, TextInput, TouchableOpacity, View, Image} from 'react-native'


import {useNavigation} from '@react-navigation/native'

import appLogo from '../../../assets/appLogo.png'

import CustomButton from '../../components/custom_button';

import {auth, createUserWithEmailAndPassword} from '../../firebase'
import reg_styles from './reg_styles';

const checkPasswordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/;

const authStyles = reg_styles; 



const SignUpForm = () => {

    const navigation = useNavigation();
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
            navigation.navigate('Login', {type: 'new'})
            alert("Вы успешно зарегистрировались")
        }).catch(error => {
            alert("Произошла ошибка при регистрации")
        })
    }
    

    


  const [showPasswordMismatch, setShowPasswordMismatch] = useState(false);
  const [showRegexMismatch, setShowRegexMismatch] = useState(false);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')


  return (
    <View style = {authStyles.authContainer}>
            
    <Image style = {authStyles.logo_image} source = {appLogo}></Image>
    <Text style = {authStyles.logo_text}>Tracker</Text>
    
    <Text style = {authStyles.text}>Регистрация</Text>
    <View style = {authStyles.inputsContainer}>
        <TextInput 
        placeholder="E-Mail" 
        style = {authStyles.textInput}
        value = {email}
        onChangeText = {text => setEmail(text)}
        />
    </View>
    <View style = {authStyles.inputsContainer}>
        <TextInput 
        secureTextEntry={true} 
        placeholder="Пароль" 
        style = {authStyles.textInput}
        value = {password}
        onChangeText = {text => {
            if (!checkPasswordRegex.test(text)){
                setShowRegexMismatch(true)
            } else {
                setShowRegexMismatch(false)
            }
            setPassword(text)
        }}
        />
    </View>

    <View style = {authStyles.inputsContainer}>
        <TextInput 
        secureTextEntry={true} 
        placeholder="Подтверждение пароля" 
        style = {authStyles.textInput}
        value = {passwordConfirmation}
        onChangeText = {text => {
            if (password === text){
                setShowPasswordMismatch(false)
            } else {
                setShowPasswordMismatch(true)
            }
            setPasswordConfirmation(text)
        }}
        />
    </View>
    
    {showPasswordMismatch &&
    <View style = {authStyles.inputsContainer}>
        <Text style = {authStyles.error_text}>Пароли не сопадают</Text>
    </View>
    }

    {showRegexMismatch && 
    <View style = {authStyles.inputsContainer}>
        <Text style = {authStyles.error_text}>Пароль должен содержать цифры и буквы, а также быть длиннее 6 символов</Text>
    </View>
    }

    
    <TouchableOpacity 
        style = {showPasswordMismatch || showRegexMismatch ? authStyles.loginButton_inactive : authStyles.loginButton}
        onPress = {() => {
            if (!(showPasswordMismatch || showRegexMismatch)){
                registerUser(email, password)
            }
        }}>
            <Text style = {authStyles.loginText}>Регистрация</Text>
    </TouchableOpacity>
    


    <CustomButton 
        onPress = {()=> {navigation.navigate('Login', {type: 'new'})}}
        textStyle = {authStyles.reg_button}
        value = "Вернуться ко форме входа"
    />
    

        
    
</View>

  )
}


const checkPassword = (password, passwordConf) => {
    if (password === passwordConf){
        return true;
    } else {
        return false;
    } 
}

/*const checkPasswordReg = (password, exp) => {
    return (exp.test(password))
} */

export default SignUpForm