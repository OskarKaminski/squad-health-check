import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routing from './src/config/appRouting'
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import aws_exports from './src/aws-exports';
Amplify.configure(aws_exports);

class App extends React.Component {
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

export default withAuthenticator(App)
