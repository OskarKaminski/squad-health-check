import {StackNavigator} from 'react-navigation'
import History from '../screens/History.screen'
import Teams from '../screens/Teams.screen'
import HealthCheck from '../screens/HealthCheck.screen'

export default StackNavigator({
    Teams: {screen: Teams},
    History: {screen: History},
    HealthCheck: {screen: HealthCheck}
})