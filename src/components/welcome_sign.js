import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const WelcomeSign = (props) => {
  return (
    <View style = {styles.main_container}>
      <Text style = {styles.welcome_text}> Привет, {props.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    main_container:{
        paddingLeft: 15,
       
    },

    welcome_text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default WelcomeSign