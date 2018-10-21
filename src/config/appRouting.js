import {StackNavigator} from 'react-navigation'
import History from '../screens/History.screen'
import Teams from '../screens/Teams.screen'
import Team from '../screens/Team.screen'
import HealthCheck from '../screens/HealthCheck.screen'
import Categories from '../screens/Categories.screen'

export default StackNavigator({
    Categories: {screen: Categories},
    Teams: {screen: Teams},
    Team: {screen: Team},
    History: {screen: History},
    HealthCheck: {screen: HealthCheck},
})