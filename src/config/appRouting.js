import {StackNavigator} from 'react-navigation'
import History from '../screens/History.screen'
import Teams from '../screens/Teams.screen'
import AddTeam from '../screens/AddTeam.screen'
import Team from '../screens/Team.screen'
import HealthCheck from '../screens/HealthCheck.screen'
import Categories from '../screens/Categories.screen'

export default StackNavigator({
    Teams: {screen: Teams},
    Categories: {screen: Categories},
    Team: {screen: Team},
    AddTeam: {screen: AddTeam},
    History: {screen: History},
    HealthCheck: {screen: HealthCheck},
}, { headerMode: 'none' })