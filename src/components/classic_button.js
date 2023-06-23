import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
const screenWidth = Dimensions.get('window').width;

const authStyles = StyleSheet.create({
    loginButton: {
        backgroundColor: '#5e99f7',
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 10, 
        width: screenWidth * 0.4,
        height: 50,
        borderRadius: 10
    }, 

    loginText: {
        fontSize: 20,
        color: 'white'
    },
})

const ClassicButton = (props) => {
  return (
    <TouchableOpacity 
                onPress={props.onPress}
                style = {
                    {
                        backgroundColor: '#5e99f7',
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        marginTop: 10, 
                        width: screenWidth * props.widthMultiplier,
                        height: 50,
                        borderRadius: 10
                    }
                }>
                    <Text style = {authStyles.loginText}>{props.value}</Text>
    </TouchableOpacity>
  )
}

export default ClassicButton

