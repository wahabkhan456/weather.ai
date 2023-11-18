import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Country from './src/screens/Country';
import store from './src/redux/store';



const Stack=createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerTitle:""}} name="Home" component={Home}/>
        <Stack.Screen name="Country" component={Country}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


