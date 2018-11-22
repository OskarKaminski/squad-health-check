import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import {Button, Text, Card, CardItem, Icon, Right, Content} from 'native-base'
import styled from 'styled-components/native'
import {Connect} from 'aws-amplify-react-native'
import {graphqlOperation} from 'aws-amplify'
import {getGroup} from '../graphql/queries';

const Page = styled.View`
    flex: 1;
    background-color: white;
    justify-content: space-between;
`

const Header = styled.View`
    backgroundColor: #0CAADC;
    height: 150px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const HeaderCenter = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  flex: 3;
`

const HeaderRight = styled.Text`
  flex: 1;
  align-items: center;
`

const HeaderLeft = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding: 10px 0;
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
                                    <HeaderLeft onPress={() => this.props.navigation.goBack()}>
                                        <Icon name='ios-arrow-back' type='Ionicons' style={{color: '#fff', fontSize: 30}} />
                                    </HeaderLeft>
                                    <HeaderCenter>{data.getGroup.description}</HeaderCenter>
                                    <HeaderRight />
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