import React from 'react';
// import Routing from './src/config/appRouting'
import Amplify, {Auth} from 'aws-amplify';
import {
    Authenticator
} from 'aws-amplify-react-native';
import aws_exports from './src/aws-exports';
// import { LoginButton } from 'react-native-fbsdk'

Amplify.configure(aws_exports);

const federated = {
    facebook_app_id: '1851060628350224'
};

export default class App extends React.Component {
    render () {
        return (
            <Authenticator
                onStateChange={(authState) => console.log(authState)}
                federated={federated}
                hideDefault={true}
                amplifyConfig={aws_exports}
            >
                {/*<LoginButton*/}
                    {/*publishPermissions={["public_profile"]}*/}
                    {/*onLoginFinished={*/}
                        {/*(error, result) => {*/}
                            {/*if (error) {*/}
                                {/*alert("Login failed with error: " + error.message);*/}
                            {/*} else if (result.isCancelled) {*/}
                                {/*alert("Login was cancelled");*/}
                            {/*} else {*/}
                                {/*console.log(result);*/}
                                {/*alert("Login was successful with permissions: " + result.grantedPermissions)*/}
                                {/*// Auth.federatedSignIn('facebook', { token, expires_at: expires}, { name: 'USER_NAME' })*/}
                                {/*//     .then(credentials => {*/}
                                {/*//         console.log('get aws credentials', credentials);*/}
                                {/*//     }).catch(e => {*/}
                                {/*//     console.log(e);*/}
                                {/*// });*/}
                            {/*}*/}
                        {/*}*/}
                    {/*}*/}
                    {/*onLogoutFinished={() => alert("User logged out")}/>*/}
            </Authenticator>
        )
        // return <Routing/>
    }
}
