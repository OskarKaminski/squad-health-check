import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import {Button, Text} from 'native-base'
import styled from 'styled-components/native'

const H1 = styled.Text`
    fontSize: 30;
    color: black;
    textAlign: center;
`

const Page = styled.View`
    flex: 1;
    backgroundColor: white;
    justifyContent: space-between;
`

export default class Teams extends React.Component {
    render () {
        return (
            <Page>
                <H1>Teams</H1>
                <Button full warning onPress={() => this.props.navigation.navigate('AddTeam')}>
                    <Text>Add new team</Text>
                </Button>
            </Page>
        )
    }
}