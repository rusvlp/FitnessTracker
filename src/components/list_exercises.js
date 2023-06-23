import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import {db, auth} from '../firebase'

import { collection, getDocs } from "firebase/firestore"

import { useNavigation } from '@react-navigation/core'

 const getExercises = async () => {
     querySnapshot = await getDocs(collection(db, 'exercises'))


    
     let exercises = querySnapshot.filter((i) => {
      if (i.user === auth.currentUser.uid) {
        
        alert(i.title)

        return true
      }
      else return false
    })
    return exercises
  } 


const screenWidth = Dimensions.get('window').width;

const ListExercises = (props) => {
    const [data, setData] = useState([{title: 'asd'}])

   const navigation = useNavigation();
  
    useEffect(() => {
        const fetchData = async () => {
          const querySnapshot = await getDocs(collection(db ,'exercises'));
          const documents = querySnapshot.docs.map(doc => doc.data());
          setData(documents);
          
        };
        fetchData();
      }, []);

    array = [1, 2, 3]

  const renderItem = (exercise) => {
    <TouchableOpacity>
            <View style = {styles.exercise}>
              <Text style = {styles.exercise_title}>{exercise.title}</Text>
            </View>
    </TouchableOpacity>
    
  }

  return (
        <View>
           
        {data[0] != undefined &&
            <TouchableOpacity
                onPress = {() => {navigation.navigate('ExerciseInfo', {
                    exercise: data[0]
                })}}
            >
                <View style = {styles.exercise}>
                 <Text style = {styles.exercise_title}>{data[0].title}</Text>
                </View>
            </TouchableOpacity>
        }

        
        
            
        </View>
    
  )

}

export default ListExercises

const styles = StyleSheet.create({
    exercise:{
        height: 75,
        width: screenWidth * 0.9, 
        backgroundColor: '#dbdbdb',
        marginLeft: 0.05 * screenWidth,
        marginRight: 0.05 * screenWidth, 
        borderRadius: 5, 
        marginTop: 10, 
        alignItems: 'center', 
        justifyContent: 'center'
       },
    
       exercise_title:{
        fontWeight: 'bold', 
       
       },
})