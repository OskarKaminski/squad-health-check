import React from 'react'
import {View, Text, Image, FlatList, Dimensions} from 'react-native'

export default class History extends React.Component {
    state = {
        categories: [
            {
                id: 'codebaseHealth',
                label: 'Codebase health',
                img: 'http://www.pngmart.com/files/3/Health-PNG-File.png'
            },
            {
                id: 'delivery',
                label: 'Delivery',
                img: 'http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2875.png'
            },
            {
                id: 'learning',
                label: 'Learning',
                img: 'http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2772.png',
            },
            {
                id: 'speed',
                label: 'Speed',
                img: 'http://www.freeiconspng.com/uploads/running-man-icon-0.png',
            },
            {
                id: 'progress',
                label: 'Progress',
                img: 'http://pluspng.com/img-png/loader-png--194.png',
            },
            {
                id: 'fun',
                label: 'Fun',
                img: 'http://assets.stickpng.com/thumbs/5a340185f2aaf7518bd292c9.png',
            },
            {
                id: 'support',
                label: 'Support',
                img: 'https://img.clipartxtras.com/2d69acf45a6efc2305640c073821a808_learning-support-resource-teaching-team-ballymitty-national-school-support-clipart-png_2220-2220.png',
            },
            {
                id: 'teamWork',
                label: 'TeamWork',
                img: 'http://www.freeiconspng.com/uploads/team-icon-3.png',
            },
            {
                id: 'mission',
                label: 'Mission',
                img: 'http://www.pngall.com/wp-content/uploads/2016/05/Mission-PNG-Picture.png',
            },
        ],
        retros: [
            {
                id: 1,
                label: 'Retro #1',
                results: {
                    codebaseHealth: 10
                }
            },
            {
                id: 2,
                label: 'Retro #2',
                results: {
                    codebaseHealth: 70
                }
            },
            {
                id: 3,
                label: 'Retro #3',
                results: {
                    codebaseHealth: 35
                }
            },
        ]
    }

    componentWillMount () {
        this.width = Dimensions.get('window').width
    }

    buildPath (results) {
        if (results.length === 1) {
            return `M0 ${results[0]} H100`
        }

        const moveX = 100 / (results.length - 1)
        const entry = `M0 ${results.shift()}`
        return results.reduce((prev, curr, i) => {
            return prev + `L${i + 1 * moveX} ${curr}`
        }, entry)

    }

    item = ({item}) => {
        return (
            <View
                style={{
                    borderBottomWidth: 1,
                    borderColor: 'rgba(0,0,0,.3)',
                    padding: 5,
                    paddingLeft: 15
                }}>
                <View style={{alignItems: 'center', flex: 1}}>
                    <Image style={{width: 40, height: 40}}
                           source={{url: item.img}}
                    />
                    <Text>{item.label}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', flex: 1}}>
                    {
                        this.state.retros.map(({results}, i) => (
                            <Text style={{
                                marginTop: 50 - (results[item.id] / 2)
                            }}>
                                {results[item.id]}
                            </Text>
                        ))
                    }
                </View>
            </View>
        )
    }

    render () {
        return (
            <View style={{marginTop: 25}}>
                <FlatList
                    data={this.state.categories}
                    keyExtractor={item => item.id}
                    renderItem={this.item}
                />
            </View>
        )
    }
}