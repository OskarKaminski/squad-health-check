import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'


export default class Login extends React.Component{


  render(){
    return (
      <View style={{marginTop: 30}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('App')}>
          <Text>Log in</Text>
        </TouchableOpacity>
      </View>
    )
  }
}