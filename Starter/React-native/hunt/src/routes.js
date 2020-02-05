import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './pages/main';
import Product from './pages/product';

const AppNavigator = createStackNavigator({
  Main: Main,
  Product: Product,
});
export default createAppContainer(AppNavigator);
