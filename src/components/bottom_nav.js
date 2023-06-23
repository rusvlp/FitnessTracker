import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import exerciseIcon from '../../assets/exercise_icon.png'
import activityIcon from '../../assets/activity_icon.png'
import trainingIcon from '../../assets/training_icon.png'
import caloriesIcon from '../../assets/calories_icon.png'
import accountIcon from '../../assets/account_icon.png'

import { useNavigation } from '@react-navigation/core'

const screenWidth = Dimensions.get('window').width;


const BottomNav = () => {

  const navigation = useNavigation();
  
  return (

    <View style = {styles.main_container}>
      <TouchableOpacity style = {styles.touchable_opacity}
        onPress = {()=>{navigation.navigate('Main')}}
      >
        <Image style = {styles.bottom_nav_icon} source = {activityIcon}/>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.touchable_opacity}
        onPress = {()=>{navigation.navigate('Exercises')}}
      >
        <Image style = {styles.bottom_nav_icon} source = {exerciseIcon}/>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.touchable_opacity}
        onPress = {()=>{}}
      >
        <Image style = {styles.bottom_nav_icon} source = {trainingIcon}/>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.touchable_opacity}
        onPress = {()=>{}}
      >
        <Image style = {styles.bottom_nav_icon} source = {caloriesIcon}/>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.touchable_opacity}
        onPress = {()=>{navigation.navigate('Account')}}
      >
        <Image style = {styles.bottom_nav_icon} source = {accountIcon}/>
      </TouchableOpacity>
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    main_container:{
        width: screenWidth,
        height: 70,
        backgroundColor: '#dbdbdb',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center'
    }, 

    touchable_opacity:{
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },

    bottom_nav_icon:{
        height: 38,
        width: 35,
    }



})