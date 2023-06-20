import {React, Component, useState} from 'react'
import {Button, Text, TextInput, TouchableOpacity, View, Image} from 'react-native'

import {auth} from 'firebase'

import authStyles from './auth_styles';
import CustomButton from '../custom_components/custom_button';



import appLogo from '../assets/appLogo.png'
function AuthForm (){
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () =>{
        auth.createUserWithEmail(email, password)
        .then(userCredentials => {
            const user = userCredentials.user
            console.log(user.email)
        
        }).catch(error => alert(error.message)) 
    }

    return(
        <View style = {authStyles.authContainer}>
            
            <Image style = {authStyles.logo_image} source = {appLogo}></Image>
            <Text style = {authStyles.logo_text}>Го пить Увек шашлык</Text>
            
            <Text style = {authStyles.text}>Авторизация Саня Васильев</Text>
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
            
            <TouchableOpacity style = {authStyles.loginButton}>
                    <Text style = {authStyles.loginText}>Войти</Text>
            </TouchableOpacity>
            <CustomButton 
                onPress = {handleSignUp}
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
