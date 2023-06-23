import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { Pedometer } from 'expo-sensors';

const MyPedometer = (props) => {
  const [steps, setSteps] = useState(0);

  const isNewDay = (lastDate) => {
    const currentDate = new Date();
  
    // Сравниваем год, месяц и день между двумя датами
    const lastYear = lastDate.getFullYear();
    const currentYear = currentDate.getFullYear();
    const lastMonth = lastDate.getMonth();
    const currentMonth = currentDate.getMonth();
    const lastDay = lastDate.getDate();
    const currentDay = currentDate.getDate();
  
    return lastYear !== currentYear || lastMonth !== currentMonth || lastDay !== currentDay;
  };

  const [data, setData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(new Date())


  useEffect(() => {
    let subscription;

    Pedometer.isAvailableAsync().then(
      result => {
        if (result) {
          subscription = Pedometer.watchStepCount(result => {
            console.log("steps updated")
            setSteps(result.steps);

            if(isNewDay(lastUpdated)){
                setSteps(0)
            }

            props.sendSteps(result.steps)
          });
        } else {
          console.log('Pedometer is not available');
        }
      },
      error => {
        console.log(error);
      }
    );

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [lastUpdated]);

  return (
    <Text style = {props.style}>{steps}</Text>
  );
};

export default MyPedometer;
