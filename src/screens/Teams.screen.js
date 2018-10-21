import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import {Button, Text, Card, CardItem, Icon, Right, Content} from 'native-base'
import styled from 'styled-components/native'
import {Connect} from 'aws-amplify-react-native'
import {graphqlOperation} from 'aws-amplify'
import {listGroups} from '../graphql/queries';

const Page = styled.View`
    flex: 1;
    backgroundColor: white;
    justifyContent: space-between;
`

const TeamIcon = styled.Image`
    width: 50; 
    height: 50;
    marginRight: 20;
`


export default class Teams extends React.Component {
    static navigationOptions = {
        title: 'Teams',
    }

    render () {
        return (
            <Connect
                query={graphqlOperation(listGroups)}
            >
                {({data, loading, errors}) => {
                    if (loading) {
                        return <Text>Loading...</Text>;
                    }
                    if (!data.listGroups) return;
                    return (
                        <Page>
                            <Content>
                                {
                                    data.listGroups.items.map(group => (
                                        <Card key={group.id}>
                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.navigate('Team', {id: group.id, title: group.description})}>
                                                <CardItem style={{flex: 1}}>
                                                    <TeamIcon
                                                        source={{uri: group.image}}/>
                                                    <Text style={{flex: 1}}>{group.description}</Text>
                                                    <Right>
                                                        <Icon name="arrow-forward"/>
                                                    </Right>
                                                </CardItem>

                                            </TouchableOpacity>
                                        </Card>
                                    ))
                                }
                            </Content>
                            <Button full warning onPress={() => this.props.navigation.navigate('AddTeam')}>
                                <Text>Create new team</Text>
                            </Button>
                        </Page>
                    )

                }}
            </Connect>
        )
    }
}