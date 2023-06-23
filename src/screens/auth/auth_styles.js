import {Dimensions, StyleSheet} from 'react-native'


const screenWidth = Dimensions.get('window').width;

const authStyles = StyleSheet.create({
    text: {
        paddingTop: 10,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center'  
    },

    authContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        width: screenWidth, 
       // backgroundColor: 'red'
    },



    inputsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'',
        fontSize: 20, 
        paddingTop: 10
    }, 

    textInput: {
        borderColor: '#ccc', 
        height: 50,
        borderWidth: 1,
        borderRadius: 15,
        width: screenWidth * 0.7,
        fontSize: 20, 
        paddingLeft: 10
    },

    inputLabel: {
        paddingRight: 10,
        fontSize: 20
    },

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

    reg_button: {
        marginTop: 10,
        fontSize: 15,
        color: '#5e99f7'
    },

    logo_image:{
        width: screenWidth * 0.35, 
        height: screenWidth * 0.35
    },

    logo_text: {
        fontSize: 20
    },

    exit_button_container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default authStyles