import { View, Text, StyleSheet, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style = {styles.headingText}>
        Incredible India!</Text>
        <View style = {[styles.card,styles.elevatedCard]}>
        <View style = {styles.headingContainer}>
        <Text style = {styles.headerText}>
        Rajasthan
        </Text>
        </View>
        <Image 
        source= {{
        uri: 'https://i0.wp.com/www.vervemagazine.co.nz/wp-content/uploads/2022/11/World-Journeys-1.jpg?w=1400&ssl=1'
        }} style = {styles.cardImage} />
        <View style = {styles.bodyContainer}>
        <Text numberOfLines={5} style = {styles.fontContent}>
        A profusion of colour, vast deserts, opulent palaces and ancient fortresses, spices piled high in the market, a lone cow holding up traffic, and some of the most lavish moustaches imaginable.
        </Text>
        </View>
        <View style = {styles.footerContainer}>
        <TouchableOpacity onPress={() => openWebsite('https://github.com/NischalPaliwal')}>
            <Text style = {styles.fontContent1}>
                KNOW MORE
            </Text>
        </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginTop: 8,
    },
    card: {
     width: 350,
     height: 550,
     borderRadius: 6,
     marginVertical: 12,
     marginHorizontal: 14
    },
    elevatedCard: {
        backgroundColor: '#ff9900',
        elevation: 3,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#FFFFFF',
        marginHorizontal: 8,
        marginVertical: 8,
        fontWeight: 'bold',
        fontSize: 24
    },
    cardImage: {
        height: 350,
        width: 350,
        marginBottom: 8,
        marginTop: 5,
    },
    bodyContainer: {
     margin: 8
    },
    footerContainer: {
     margin: 2,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center'
    },
    fontContent: {
        color: '#FFFFFF',
    },
    fontContent1: {
        color: '#000000',
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        fontWeight: 'bold'
    },
})