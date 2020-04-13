/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//import { NavigationContainer }  from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

//import { Home, Footloose, Elvis} from './Screens';

AppRegistry.registerComponent(appName, () => App);
/*const AuthStack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Home"
                component = {Home}
                options={{ title: "Home" }}
             />

            <AuthStack.Screen
                name="footloose"
                component = {Footloose}
                options={{ title: "Footloose" }}
             />

            <AuthStack.Screen
                 name="Elvis"
                 component = {Elvis}
                 options={{ title: "Elvis" }}
            />
        </AuthStack.Navigator>
    </NavigationContainer>
);*/
