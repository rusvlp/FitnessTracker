import {Component} from 'react'

import {Text, TouchableWithoutFeedback} from 'react-native'

class CustomButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <TouchableWithoutFeedback
                onPress={this.props.onPress}
            >
                <Text style={this.props.textStyle}>{this.props.value}</Text>
            </TouchableWithoutFeedback>
        )
    }
}

export default CustomButton