import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style = {styles.headingText}>
        Destinations by Country</Text>
        <ScrollView horizontal = {true} style = {styles.container}>
            <View style = {[styles.card,styles.cardOne]}>
                <Text style = {styles.font}>
                    India
                </Text>
            </View>
            <View style = {[styles.card,styles.cardTwo]}>
                <Text style = {styles.font}>
                    Greece
                </Text>
            </View>
            <View style = {[styles.card,styles.cardThree]}>
                <Text style = {styles.font}>
                    Australia
                </Text>
            </View>
            <View style = {[styles.card,styles.cardForth]}>
                <Text style = {styles.font}>
                    Mauritius
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
        paddingHorizontal: 12
    },
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 50,
        borderRadius: 4,
        margin: 10
    },
    cardOne: {
       backgroundColor: '#e74c3c'
    },
    cardTwo: {
       backgroundColor: '#3498db'
    },
    cardThree: {
       backgroundColor: '#f9ca24'
    },
    cardForth: {
        backgroundColor: '#4a15ad'
    },
    font: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 22
      }
})