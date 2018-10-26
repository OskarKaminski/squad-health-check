import React from 'react'
import {View, Image, TouchableOpacity, Text} from 'react-native'
import {Button, Card, CardItem, Icon, Right, Content, Left, Thumbnail, Body} from 'native-base'
import styled from 'styled-components/native'
import {Connect} from 'aws-amplify-react-native'
import {graphqlOperation} from 'aws-amplify'
import {listCategories} from '../graphql/queries';

const Page = styled.View`
    flex: 1;
    backgroundColor: white;
    justifyContent: space-between;
`

const CategoryIcon = styled.Image`
    width: 50; 
    height: 50;
`

export default class Categories extends React.Component {
    static navigationOptions = {
        title: 'Categories',
    }

    render () {
        return (
            <Connect
                query={graphqlOperation(listCategories)}
            >
                {({data, loading, errors}) => {
                    if (loading) {
                        return <Text>Loading...</Text>;
                    }
                    if (!data.listCategorys) return;
                    return (
                        <Page>
                            <Content>
                                {
                                    data.listCategorys.items.map(category => (
                                        <Card key={category.id}>
                                            <CardItem style={{flexDirection: 'column', alignItems: 'center'}}>
                                                {
                                                    category.image &&
                                                    <CategoryIcon
                                                        resizeMode='contain'
                                                        source={{uri: category.image}}/>
                                                }
                                                <Text style={{flex: 1, textAlign: 'center', fontSize: 20}}>{category.name}</Text>
                                            </CardItem>
                                            <CardItem style={{alignItems: 'flex-start', justifyContent: 'flex-start', flex: 1}}>
                                                <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 5, marginRight: 5, flex: 1}}>
                                                    <Text style={{marginBottom: 10, fontWeight: 'bold', color: '#559955'}}>Green</Text>
                                                    <Text>{category.descriptionGreen}</Text>
                                                </View>
                                                <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 5, marginRight: 5, flex: 1}}>
                                                    <Text style={{marginBottom: 10, fontWeight: 'bold', color: '#cc5555'}}>Red</Text>
                                                    <Text>{category.descriptionRed}</Text>
                                                </View>
                                            </CardItem>
                                        </Card>
                                    ))
                                }
                            </Content>
                        </Page>
                    )

                }}
            </Connect>
        )
    }
}