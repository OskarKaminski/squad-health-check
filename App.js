import React from 'react';
import Routing from './src/config/appRouting'
import Amplify from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';
import aws_exports from './src/aws-exports';

Amplify.configure(aws_exports);

class App extends React.Component {
    render () {
        return <Routing/>
    }
}

export default withAuthenticator(App, {includeGreetings: true})
