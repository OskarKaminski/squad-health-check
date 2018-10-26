import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import {Button, Text, Card, CardItem, Icon, Right, Content, Form, Label, Input, Item} from 'native-base'
import styled from 'styled-components/native'

const Page = styled.View`
    flex: 1;
    backgroundColor: white;
    justifyContent: space-between;
`


export default class Teams extends React.Component {
    static navigationOptions = {
        title: 'Add a Team',
    }

    render () {
        return (
            <Page>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>
                <Button full warning onPress={() => this.props.navigation.navigate('AddTeam')}>
                    <Text>Add</Text>
                </Button>
            </Page>
        )
    }
}