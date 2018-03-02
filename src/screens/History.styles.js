import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  table: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10
  },
  healthItem: {
    justifyContent: 'center'
  },
  healthItemCell: {
    height: 40,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: 35,
    height: 35,
  },
  label: {
    backgroundColor: 'rgba(0,0,0,.1)'
  },
  resultCell: {
    flexDirection: 'row'
  }
})