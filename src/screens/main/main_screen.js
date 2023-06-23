import { View, Text, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'

import mainStyles from './main_styles';

import { PieChart } from 'react-native-svg-charts';

import {auth} from '../../firebase'
import WelcomeSign from '../../components/welcome_sign';

import BottomNav from '../../components/bottom_nav';



import { useNavigation } from '@react-navigation/core';

import MyPedometer from '../../components/pedometer';

const styles = mainStyles;



const MainScreen = () => {
  const navigation = useNavigation();

  /*useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress', () => {})
  }) */

  navigation.addListener('beforeRemove', (e) => {})

  const [steps, setSteps] = useState('0')

  const getSteps = (steps) => {
    setSteps(steps);
  }

  let targetSteps = 3600;

  const stepsData = [
    {
      value: steps, 
      svg: {
        fill: 'red', 
      }, 
      key: `pie-${0}`
    }, 
    {
      value: targetSteps, 
      svg: {
        fill: 'gray', 
      }, 
      key: `pie-${1}`
    }
  ]
    

  return (
    <View style = {mainStyles.main_container}>
      <WelcomeSign email = {auth.currentUser.email}/>
      <View style = {mainStyles.pedometer_style}>
        <Text style = {mainStyles.pedometer_text_style}>Ваши шаги за сегодня</Text>
      </View>
      <View style = {mainStyles.content_container}>
        <View style = {mainStyles.chart_view}>
          <PieChart
            style={ { height: 200 } }
            data = {stepsData}
            innerRadius = {80}
          />
        </View>
        <View style = {mainStyles.pedometer_style}>
          <MyPedometer style = {mainStyles.pedometer_text_style} sendSteps = {getSteps}/>
          <Text style = {mainStyles.pedometer_text_style}>/</Text>
          <Text style = {mainStyles.pedometer_text_style}>{targetSteps}</Text>
        </View>
        
        
      </View>
      <View style = {mainStyles.bottom_container}> 
        <BottomNav/>
      </View>
     
    </View>
  )
}

const MyChart = () => {
  const data = [ 0, 3600]

    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data
      .filter(value => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: randomColor(),
          
        },
        key: `pie-${index}`,
      }))

    return (
      <PieChart
        style={ { height: 200 } }
        data={ pieData }
      />
    )
}

export default MainScreen