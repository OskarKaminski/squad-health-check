import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routing from './src/config/loginRouting'

export default class App extends React.Component {
  render() {
    return <Routing />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
