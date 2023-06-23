import {StyleSheet, Dimensions} from 'react-native'

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
   main_container:{
    flex: 1,
    flexDirection: 'column', 
    paddingTop: 15
   },

   content_container:{

   }, 

   bottom_container: {
    flex: 1, 
    flexDirection: 'column-reverse'
   },

   title: {
    alignItems: 'center',
   
   },

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

   exercises_list:{
   
   },

   title_sign:{
    fontWeight: 'bold', 
    
   }
   

})

export default styles;