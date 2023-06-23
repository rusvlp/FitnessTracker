import { View, Text } from 'react-native'
import React from 'react'
import accountStyles from './account_styles'

import BottomNav from '../../components/bottom_nav'
import CustomButton from '../../components/custom_button'
import ClassicButton from '../../components/classic_button'

import {auth} from '../../firebase'
import { async } from '@firebase/util'

import { useNavigation } from '@react-navigation/core'

const AccountScreen = () => {

    const navigation = useNavigation();

    const logout = async() =>{
        await auth.signOut()
    }

    return (

    

    <View style = {accountStyles.main_container}>
       <View style = {accountStyles.exit_button_container}> 
        <ClassicButton onPress = {() => {
            logout();
            navigation.navigate('Login', {type: 'new'})
        }}
        value = "Выйти из аккаунта"
        widthMultiplier = {0.55}/>
      </View>
      
      <View style = {accountStyles.content_container}></View>
      <View style = {accountStyles.bottom_container}> 
        <BottomNav/>
      </View>
     
    </View>
  )
}

export default AccountScreen