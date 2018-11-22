import React from 'react'
import {View, Image, TouchableOpacity, Text} from 'react-native'
import {Card, CardItem, Icon, Content} from 'native-base'
import styled from 'styled-components/native'
import {Connect} from 'aws-amplify-react-native'
import {graphqlOperation} from 'aws-amplify'
import {listCategories} from '../graphql/queries';
import DefaultIcon from '../../assets/default-icon-2x.png'

const Page = styled.View`
    flex: 1;
    backgroundColor: #FAFBFC;
    justifyContent: space-between;
`

const Header = styled.View`
    backgroundColor: #0CAADC;
    height: 150px;
    flex-direction: row;
    justifyContent: space-between;
    align-items: center;
    padding: 0 30px;
`

const HeaderText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`

const CategoryIcon = styled.Image`
    width: 80; 
    height: 80;
`
const CategoriesList = styled.View`
  margin-top: -30px;
`

const squadCardStyles = {
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
    height: 120,
    justifyContent: 'center',
    marginBottom: 15
}

const cardItemStyles = {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10
}

export default class Categories extends React.Component {
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
                                <Header>
                                    <HeaderText>
                                        <Icon name='ios-arrow-back' type='Ionicons'
                                              style={{color: '#fff', fontSize: 30}}/>
                                    </HeaderText>
                                    <HeaderText>Categories</HeaderText>
                                    <Icon name='add' type='MaterialIcons' style={{color: '#fff', fontSize: 30}}/>
                                </Header>
                                <CategoriesList>
                                    {
                                        data.listCategorys.items.map(category => (
                                            <Card key={category.id} style={squadCardStyles}>
                                                <CardItem style={cardItemStyles}>
                                                    <CategoryIcon
                                                        resizeMode='contain'
                                                        source={
                                                            category.image && {uri: category.image} ||
                                                            DefaultIcon
                                                        }/>
                                                    <Text style={{
                                                        flex: 1,
                                                        textAlign: 'center',
                                                        fontSize: 16
                                                    }}>{category.name}</Text>
                                                    <Icon name='ios-arrow-forward' type='Ionicons'
                                                          style={{color: '#0CAADC', fontSize: 30}}/>
                                                </CardItem>
                                            </Card>
                                        ))
                                    }
                                </CategoriesList>
                            </Content>
                        </Page>
                    )

                }}
            </Connect>
        )
    }
}