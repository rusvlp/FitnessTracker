import { StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import ClassicButton from '../../components/classic_button';
import { db } from '../../firebase';
import { async } from '@firebase/util';
import { updateDoc } from '@firebase/firestore';

const ExerciseInfo = ({route, navigation}) => {

 

 const { exercise } = route.params;

 console.log(exercise)

 const[repeat, setRepeat] = useState(exercise.number_of_repeats)
 const[eachRepeat, setEachRepeat] = useState(exercise.number_of_each_repeat)
 const[weight, setWeight] = useState(exercise.weight)
  return (
    <View style = {styles.main_contaner}>
      <Text style = {styles.title_style}>{exercise.title}</Text>
      <Text style = {styles.info_text}>Количество подходов</Text>
      <View style = {styles.control}>
        <ClassicButton value = "+" onPress = {() => {
            setRepeat(repeat+1)
            exercise.number_of_repeats = repeat+1
            }} widthMultiplier = {0.15}></ClassicButton>
        <Text style = {styles.control_text}>{repeat}</Text>
        <ClassicButton value = "-" onPress = {() => {
            repeat > 0? setRepeat(repeat-1) : ()=>{}
            repeat > 0? exercise.number_of_repeats = repeat-1 : ()=>{}
            }} widthMultiplier = {0.15}></ClassicButton>
      </View>

      <Text style = {styles.info_text}>Количество повторений</Text>

      <View style = {styles.control}>
        <ClassicButton value = "+" onPress = {() => {
            setEachRepeat(eachRepeat+1)
            exercise.number_of_each_repeat = eachRepeat+1
            }} widthMultiplier = {0.15}></ClassicButton>
        <Text style = {styles.control_text}>{eachRepeat}</Text>
        <ClassicButton value = "-" onPress = {() => {
            repeat > 0? setEachRepeat(eachRepeat-1) : ()=>{}
            repeat > 0? exercise.number_of_each_repeat = eachRepeat-1 : ()=>{}
            }} widthMultiplier = {0.15}></ClassicButton>
      </View>

      <Text style = {styles.info_text}>Вес</Text>

      <View style = {styles.control}>
        <ClassicButton value = "+" onPress = {() => {
            setWeight(weight+1)
            exercise.weight = weight+1
            }} widthMultiplier = {0.15}></ClassicButton>
        <Text style = {styles.control_text}>{weight}</Text>
        <ClassicButton value = "-" onPress = {() => {repeat > 0? setWeight(weight-1) : ()=>{}}} widthMultiplier = {0.15}></ClassicButton>
      </View>

       <View style = {styles.save_container}>
       <ClassicButton value = "Сохранить" onPress = {() => {
        alert(exercise.uid)
            async () => {
                await updateDoc(doc(db, 'exercises', exercise.title), {
                    
                    number_of_each_repeat: exercise.number_of_each_repeat,
                    number_of_repeats: exercise.number_of_repeats,
                    weight: exercise.weight
                })
            }
       }} widthMultiplier = {0.3}></ClassicButton>
       </View> 
       <View style = {styles.save_container}>
       <ClassicButton value = "Удалить" onPress = {() => {}} widthMultiplier = {0.3}></ClassicButton>
       </View> 
    </View>
  )
}

export default ExerciseInfo

const styles = StyleSheet.create({
    main_contaner: {
        flex: 1, 
        alignItems: 'center'
    },

    title_style: {
        marginTop: 10, 
        fontWeight: 'bold', 
        fontSize: 20
    },
    
    control: {
       
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        
    },

    info_text: {
        marginTop: 10, 
        fontWeight: 'bold', 
        fontSize: 15
    },

    control_text: {
        marginTop: 10, 
        fontWeight: 'bold', 
        fontSize: 15,
        paddingLeft: 10, 
        paddingRight: 10
    },

    save_container:{
        marginTop: 10
    }
})