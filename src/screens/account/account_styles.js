import {StyleSheet} from 'react-native'

const accountStyles = StyleSheet.create({
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

   exit_button_container:{
   
        alignItems: 'center',
        justifyContent: 'center'
    }


})

export default accountStyles;