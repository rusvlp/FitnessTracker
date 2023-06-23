import {StyleSheet} from 'react-native'

const mainStyles = StyleSheet.create({
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

   chart_view: {
    marginTop: 20
   },

   pedometer_style:{
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row'
   },

   pedometer_text_style:{
    fontSize: 30,
    fontWeight: 'bold'
   }

})

export default mainStyles;