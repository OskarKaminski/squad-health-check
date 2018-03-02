import {TabNavigator} from 'react-navigation'
import History from '../screens/History.screen'
import HealthCheck from '../screens/HealthCheck.screen'

export default TabNavigator({
  History: {screen: History},
  HealthCheck: {screen: HealthCheck},
})