import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './exercise_styles'

import BottomNav from '../../components/bottom_nav'
import ListExercises from '../../components/list_exercises'
//import list_exercises from '../../components/list_exercises'


const ExercisesScreen = () => {

  
 

  
  return (
    <View style = {styles.main_container}>
      <View style = {styles.title}>
        <Text style = {styles.title_sign}>Ваши упражнения</Text>
      </View>
       
      
      <View style = {styles.content_container}>
        <ScrollView contentContainerStyles = {styles.exercises_list}>


        <ListExercises></ListExercises>
        

        </ScrollView>
        
      </View>
      <View style = {styles.bottom_container}> 
        <BottomNav></BottomNav>
      </View>
     
    </View>
  )
}

export default ExercisesScreen