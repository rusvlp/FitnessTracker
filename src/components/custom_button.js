import {Component, useState} from 'react'

import {Text, TouchableWithoutFeedback} from 'react-native'

function CustomButton (props){
        this.props = props;
 
        const [isActive, setIsActive] = useState(false)

        return(
            <TouchableWithoutFeedback
                onPress={this.props.onPress}
            >
                <Text style={this.props.textStyle}>{this.props.value}</Text>
            </TouchableWithoutFeedback>
        )
  
}

export default CustomButton