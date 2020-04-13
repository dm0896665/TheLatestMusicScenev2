import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Footloose from '../screens/Footloose'
import Elvis from '../screens/Elvis'

const screens =
{
    Home:
    {
        screen: Home
    },
    Footloose:
    {
        screen: Footloose
    },
    Elvis:
    {
        screen: Elvis
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);