import React from 'react';
import {
    Pressable,
    StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import List1 from './components/List1';
import List2 from './components/List2';
import List3 from './components/List3';
import { shadow } from 'react-native-paper';
import App_1 from './App_1'

const tabs = createBottomTabNavigator()

function App(): JSX.Element {

  return (
    <NavigationContainer>
       <tabs.Navigator
       screenOptions={{
        tabBarStyle: {...styles.tabContainer},
        tabBarShowLabel: false,
        headerShown: false
       }}>
        <tabs.Screen 
        name = 'Home' 
        component={App_1}
        options={{
          tabBarIcon: ({focused}) => (
          <View style = {{
          alignItems: 'center',
          justifyContent: 'center',
          top: 10
          }}>
            <Image
            source = {require('./assets/icons/home.png')}
            resizeMode = 'contain'
            style = {{
            width: 30,
            height: 30,
            tintColor: '#FFFFFF',
            }}
            />
            <Text style = {{
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: '800',
            }}>HOME</Text>
          </View>
          ),
        }}
        />
        <tabs.Screen 
        name = 'Profile' 
        component={List2}
        options={{
          tabBarIcon: ({focused}) => (
          <View style = {{
          alignItems: 'center',
          justifyContent: 'center',
          top: 10
          }}>
            <Image
            source = {require('./assets/icons/user.png')}
            resizeMode = 'contain'
            style = {{
            width: 30,
            height: 30,
            tintColor: '#FFFFFF',
            }}
            />
            <Text style = {{
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: '800',
            }}>PROFILE</Text>
          </View>
          ),
        }}/>
        <tabs.Screen 
        name = 'Settings' 
        component={List3}
        options={{
          tabBarIcon: ({focused}) => (
          <View style = {{
          alignItems: 'center',
          justifyContent: 'center',
          top: 10
          }}>
            <Image
            source = {require('./assets/icons/setting.png')}
            resizeMode = 'contain'
            style = {{
            width: 30,
            height: 30,
            tintColor: '#FFFFFF',
            }}
            />
            <Text style = {{
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: '800',
            }}>SETTINGS</Text>
          </View>
          ),
        }}/>
        <tabs.Screen 
        name = 'Help' 
        component={List3}
        options={{
          tabBarIcon: ({focused}) => (
          <View style = {{
          alignItems: 'center',
          justifyContent: 'center',
          top: 10
          }}>
            <Image
            source = {require('./assets/icons/help.png')}
            resizeMode = 'contain'
            style = {{
            width: 30,
            height: 30,
            tintColor: '#FFFFFF',
            }}
            />
            <Text style = {{
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: '800',
            }}>HELP</Text>
          </View>
          ),
        }}/>
       </tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
    tabContainer: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#1d5191',
        borderRadius: 15,
        height: 90,
        ...shadow
    },
    shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
    }
})