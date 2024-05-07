import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.headingText}>
        Destinations by Cities</Text>
        <ScrollView horizontal = {true} style = {styles.container}>
          <View style = {[styles.card,styles.cardElevated]}>
          <Text style = {styles.font}>
            Kolkata
          </Text>
          </View>
          <View style = {[styles.card,styles.cardElevated1]}>
          <Text style = {styles.font}>
            Istanbul
          </Text>
          </View>
          <View style = {[styles.card,styles.cardElevated2]}>
          <Text style = {styles.font}>
            New York
          </Text>
          </View>
          <View style = {[styles.card,styles.cardElevated3]}>
          <Text style = {styles.font}>
            Dubai
          </Text>
          </View>
          <View style = {[styles.card,styles.cardElevated4]}>
          <Text style = {styles.font}>
            Bangkok
          </Text>
          </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
headingText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
},
container: {
    flex: 1,
    flexDirection: 'row',
},
card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 50,
    margin: 10,
    borderRadius: 4
},
cardElevated: {
    backgroundColor: '#8a307f',
    elevation: 4
},
cardElevated1: {
  backgroundColor: '#79a7d3',
  elevation: 4
},
cardElevated2: {
  backgroundColor: '#6883bc',
  elevation: 4
},
cardElevated3: {
  backgroundColor: '#ff9a8d',
  elevation: 4
},
cardElevated4: {
  backgroundColor: '#f47a60',
  elevation: 4
},
font: {
  color: '#FFFFFF',
  fontSize: 22,
  fontWeight: 'bold'
}
})