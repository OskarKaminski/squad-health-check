import {DrawerNavigator} from 'react-navigation'
import Login from '../screens/Login.screen'
import AppRouting from './appRouting'

export default DrawerNavigator({
  Login: {screen: Login},
  App: {screen: AppRouting},
})