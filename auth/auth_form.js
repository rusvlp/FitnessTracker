import {React, Component} from 'react'
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native'

import authStyles from './auth_styles';



class AuthForm extends Component{
    constructor(props){
        super(props)
        this.state = {text: ''}
    }

    render(){
        return(
           <View style = {authStyles.authContainer}>
                <Text style = {authStyles.text}>Авторизация</Text>
                <View style = {authStyles.inputsContainer}>
                    <TextInput placeholder="E-Mail" style = {authStyles.textInput}></TextInput>
                </View>
                <View style = {authStyles.inputsContainer}>
                    <TextInput secureTextEntry={true} placeholder="Пароль" style = {authStyles.textInput}></TextInput>
                </View>
                
                <TouchableOpacity style = {authStyles.loginButton}>
                     <Text style = {authStyles.loginText}>Войти</Text>
                </TouchableOpacity>
           </View>
           
        )
    }
}




export default AuthForm
