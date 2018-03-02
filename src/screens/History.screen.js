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
        img: 'https://png.pngtree.com/element_pic/17/01/01/e9fc56cc583c491b99fffdea6b8cc578.jpg'
      }
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