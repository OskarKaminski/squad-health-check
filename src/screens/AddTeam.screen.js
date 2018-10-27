import React from 'react'
import {View, Image, TouchableOpacity, CameraRoll, ScrollView, ImagePickerIOS} from 'react-native'
import {Button, Text, Card, CardItem, Icon, Right, Content, Form, Label, Input, Item, Grid, Row, Col} from 'native-base'
import styled from 'styled-components/native'

const Page = styled.View`
    flex: 1;
    backgroundColor: white;
    justifyContent: space-between;
`
const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default class Teams extends React.Component {
    state = {
        photos: []
    }

    static navigationOptions = {
        title: 'Add a Team',
    }

    _getPhotos = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
            .then(r => {
                this.setState({photos: r.edges});
            })
            .catch((err) => {
                //Error Loading Images
            });
    };

    render () {
        return (
            <Page>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input/>
                        </Item>
                        <Button primary onPress={this._getPhotos}>
                            <Text>Create new team</Text>
                        </Button>
                    </Form>
                    <ScrollView>
                        <Grid style={{gridTemplateColumns: 3}}>
                            {this.state.photos.map((p, i) => {
                                return (
                                    <Col key={i} style={{height: 100, width: 100}}>
                                        <Image
                                            style={{
                                                width: 100,
                                                height: 100,
                                            }}
                                            source={{uri: p.node.image.uri}}
                                        />
                                    </Col>
                                );
                            })}
                        </Grid>
                    </ScrollView>
                </Content>
                <Button full warning onPress={() => this.props.navigation.navigate('AddTeam')}>
                    <Text>Add</Text>
                </Button>
            </Page>
        )
    }
}