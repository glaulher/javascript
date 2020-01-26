import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './pages/main';

const Routes = createStackNavigator({
  Main: Main,
});
export default createAppContainer(Routes);
