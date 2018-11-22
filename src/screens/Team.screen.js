import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import {Button, Text, Card, CardItem, Icon, Right, Content} from 'native-base'
import styled from 'styled-components/native'
import {Connect} from 'aws-amplify-react-native'
import {graphqlOperation} from 'aws-amplify'
import {getGroup} from '../graphql/queries';

const Page = styled.View`
    flex: 1;
    backgroundColor: white;
    justifyContent: space-between;
`

const Header = styled.View`
    backgroundColor: #0CAADC;
    height: 150px;
    justifyContent: center;
    align-items: center;
`

const HeaderText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`


export default class Team extends React.Component {
    static navigationOptions = (props) => {
        console.log({'props': props});
        return {
            title: props.navigation.state.params.title
        }
    }

    render () {
        return (
            <Connect
                query={graphqlOperation(getGroup, {id: this.props.navigation.state.params.id})}
            >
                {({data, loading, errors}) => {
                    if (loading) {
                        return <Text>Loading...</Text>;
                    }
                    if (!data.getGroup) return;

                    return (
                        <Page>
                            <Content>
                                <Header>
                                    <HeaderText>{data.getGroup.description}</HeaderText>
                                </Header>
                                <Text>Hey</Text>
                            </Content>
                        </Page>
                    )

                }}
            </Connect>
        )
    }
}