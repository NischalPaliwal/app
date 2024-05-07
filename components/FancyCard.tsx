import { StyleSheet, View, Text, Image, ScrollView} from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style = {styles.headingText}>
        Trending Places</Text>
        <ScrollView horizontal = {true} style = {styles.container}>
        <View style = {[styles.card, styles.cardElevated]}>
        <Image source={{
            uri: 'https://i0.wp.com/oneday.tours/wp-content/uploads/one-day-udaipur-local-sightseeing-tour-package-private-cab-header-v2.jpg?w=1920&ssl=1'
        }}
        style = {styles.cardImage} />
        <View style = {styles.cardBody}>
        <Text style = {styles.cardTitle}>
            Udaipur
        </Text>
        <Text style = {styles.cardLabel}>
         Known as the "City of Lakes" & "Venice of the East"
        </Text>
        <Text style = {styles.cardDescription}>
        Udaipur is a city in the north-western Indian state of Rajasthan, about 415 km (258 mi) south of the state capital Jaipur. It serves as the administrative headquarters of Udaipur district. It is the historic capital of the kingdom of Mewar in the former Rajputana Agency. It was founded in 1559 by Udai Singh II of the Sisodia clan of Rajputs, when he shifted his capital from the city of Chittorgarh to Udaipur after Chittorgarh was besieged by Akbar. It remained as the capital city till 1818 when it became a British princely state, and thereafter the Mewar province became a part of Rajasthan when India gained independence in 1947. It is also known as the City of Lakes, as it is surrounded by five major artificial lakes.
        </Text>
        </View>
        </View>


        <View style = {[styles.card1, styles.cardElevated1]}>
        <Image source={{
            uri: 'https://images.unsplash.com/photo-1529057299613-a565b7ce93aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }}
        style = {styles.cardImage} />
        <View style = {styles.cardBody}>
        <Text style = {styles.cardTitle}>
            Coorg
        </Text>
        <Text style = {styles.cardLabel}>
         Known as the "The Scotland of India"
        </Text>
        <Text style = {styles.cardDescription}>
        Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and the streams cutting right through them. Coorg, officially known as Kodagu, is the most affluent hill station in Karnataka. It is well known for its breathtakingly exotic scenery and lush greenery. Forest covered hills, spice and coffee plantations only add to the landscape. Madikeri is the region's centre point with all transportation for getting around starting from here. On a visit to Coorg, cover the beautiful towns like Virajpet, Kushalnagar, Gonikoppal, Pollibetta, and Somwarpet, and experience the beautiful concept of "homestays" to make your experience more memorable! 
        </Text>
        </View>
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
        width: 353,
       height: 548,
       borderRadius: 6,
       marginVertical: 12,
       marginHorizontal: 16
    },
    cardElevated: { 
       backgroundColor: '#ff3366',
       elevation: 3,
       shadowOffset: {
        width: 2,
        height: 2
       }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow:1,
        paddingHorizontal: 7
    },
    cardTitle: {
    color: '#FFFFFF',
    margin: 4,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6
    },
    cardLabel: {
    color: '#FFFFFF',
    fontStyle: 'italic',
    fontSize: 16,
    margin: 4,
    marginBottom: 6,
    marginTop: 3
    },
    cardDescription: {
    color: '#FFFFFF',
    margin: 4,
    fontSize: 14,
    },
    cardFooter: {
        
    },
    card1: {
        width: 353,
       height: 548,
       borderRadius: 6,
       marginVertical: 12,
       marginHorizontal: 8
    },
    cardElevated1: { 
       backgroundColor: '#33cc99',
       elevation: 3,
       shadowOffset: {
        width: 2,
        height: 2
       }
    },
})