import React from 'react';
import {
    Pressable,
    StyleSheet,
  Text,
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import List1 from './components/List1';
import List2 from './components/List2';
import List3 from './components/List3'

const tabs = createBottomTabNavigator()

function App(): JSX.Element {

  return (
    <NavigationContainer>
       <tabs.Navigator
       screenOptions={{
        tabBarStyle: {...styles.tabContainer},
        tabBarShowLabel: true,
       }}>
        <tabs.Screen 
        name = 'Home' 
        component={List1}

        />
        <tabs.Screen name = 'Profile' component={List2}/>
        <tabs.Screen name = 'Settings' component={List3}/>
       </tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
    tabContainer: {
        position: 'absolute',
        bottom: 0,
        width: '90%',
        height: 70,
        backgroundColor: '#6434eb',
        borderRadius: 30,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginVertical: 12,
        marginHorizontal: 20,
        borderColor: '#FFFFFF'
    }
})