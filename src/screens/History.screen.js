import React from 'react'
import {View, Text, Image} from 'react-native'
import styles from './History.styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
        id: 'Learning',
        label: 'Learning',
        img: 'http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2772.png',
      },
      {
        id: 'Speed',
        label: 'Speed',
        img: 'http://www.freeiconspng.com/uploads/running-man-icon-0.png',
      },
      {
        id: 'Progress',
        label: 'Progress',
        img: 'http://pluspng.com/img-png/loader-png--194.png',
      },
      {
        id: 'Fun',
        label: 'Fun',
        img: 'http://assets.stickpng.com/thumbs/5a340185f2aaf7518bd292c9.png',
      },
      {
        id: 'Support',
        label: 'Support',
        img: 'https://img.clipartxtras.com/2d69acf45a6efc2305640c073821a808_learning-support-resource-teaching-team-ballymitty-national-school-support-clipart-png_2220-2220.png',
      },
      {
        id: 'TeamWork',
        label: 'TeamWork',
        img: 'http://www.freeiconspng.com/uploads/team-icon-3.png',
      },
      {
        id: 'Mission',
        label: 'Mission',
        img: 'http://www.pngall.com/wp-content/uploads/2016/05/Mission-PNG-Picture.png',
      },
    ],
    retros: [
      {
        id: 1,
        label: 'Retro #1',
        results: {
          codebaseHealth: 10,
          delivery: 85
        }
      }, {
        id: 2,
        label: 'Retro #2',
        results: {
          codebaseHealth: 60,
          delivery: 40
        }
      },
    ]
  }

  render () {
    return (
      <View>
        <View style={styles.table}>

          <View style={[styles.healthItem, styles.label]}>
            <View style={styles.healthItemCell}>
              <Text></Text>
            </View>
            <View style={styles.healthItemCell}>
              <Text>Sprint</Text>
            </View>
            {
              this.state.retros.map(retro => (
                <View key={retro.id} style={styles.healthItemCell}>
                  <Text>{retro.label}</Text>
                </View>
              ))
            }
          </View>
          {
            this.state.categories.map(category => (
              <View key={category.id} style={styles.healthItem}>
                <View style={[styles.healthItemCell, styles.label]}>
                  <Image source={{uri: category.img}} style={styles.categoryImage}/>
                </View>
                <View style={[styles.healthItemCell, styles.label]}>
                  <Text>{category.label}</Text>
                </View>
                {
                  this.state.retros.map((retro, i) => (
                    <View key={retro.id} style={[styles.healthItemCell, styles.resultCell]}>
                      <Text style={{marginRight: 5}}>{retro.results[category.id]}</Text>
                      {
                        this.state.retros[i-1] && this.state.retros[i-1].results[category.id] && this.state.retros[i-1].results[category.id] < retro.results[category.id] &&
                        <Icon name="thumb-up" color="black" size={16}/>
                      }
                      {
                        this.state.retros[i-1] && this.state.retros[i-1].results[category.id] && this.state.retros[i-1].results[category.id] > retro.results[category.id] &&
                        <Icon name="thumb-down" color="black" size={16}/>
                      }

                    </View>
                  ))
                }
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}