import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style = {styles.background}>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCard/>
      <ActionCard/>
      <ContactList/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1F1A24'
  }
})