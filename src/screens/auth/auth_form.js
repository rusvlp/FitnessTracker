import {React, Component, useState} from 'react'
import {Button, Text, TextInput, TouchableOpacity, View, Image} from 'react-native'

// import * as Firebase from 'firebase';

//import auth from './firebase'

import {auth, signInWithEmailAndPassword} from '../../firebase'

import {useNavigation} from '@react-navigation/native'


import authStyles from './auth_styles';
import CustomButton from '../../components/custom_button';

import appLogo from '../../../assets/appLogo.png'
function AuthForm (){
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    const handleLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            alert("Выполнен вход в систему как: " + user.email)
        })
       // alert("SignUp handled");
    }

    return(
        <View style = {authStyles.authContainer}>
            
            <Image style = {authStyles.logo_image} source = {appLogo}></Image>
            <Text style = {authStyles.logo_text}>Tracker</Text>
            
            <Text style = {authStyles.text}>Авторизация</Text>
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
                onChangeText = {text => setPassword(text)}
                />
            </View>
            
            <TouchableOpacity 
                onPress={() => {
                    handleLogin(email, password)
                }}
                style = {authStyles.loginButton}>
                    <Text style = {authStyles.loginText}>Войти</Text>
            </TouchableOpacity>
            <CustomButton 
                onPress = {()=> {navigation.navigate('SignUp', {type: 'new'})}}
                textStyle = {authStyles.reg_button}
                value = "Нет аккаунта? Регистрация"
            />
            
        
                
            
        </View>
        
    )
    
}


const regPress = () =>{
    console.log("Pressed Reg")
}

export default AuthForm
