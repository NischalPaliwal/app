import React from 'react';
import {
  Text,
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List1 from './components/List1';
import List2 from './components/List2';

const tabs = createBottomTabNavigator()

function App(): JSX.Element {

  return (
    <NavigationContainer>
       <tabs.Navigator>
        <tabs.Screen name = 'Home' component={List1}/>
        <tabs.Screen name = 'Profile' component={List2}/>
       </tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;