import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Rahul',
            status: 'Just an extra ordinary teacher'
        },
        {
            uid: 2,
            name: 'Saransh',
            status: 'Aspiring Software Developer'
        },
        {
            uid: 3,
            name: 'Jennifer',
            status: 'An emerging actress'
        },
        {
            uid: 4,
            name: 'John',
            status: 'I love to Code and Teach!'
        },
    ];
  return (
    <View>
      <Text style = {styles.headingText}>Contact List</Text>
      <ScrollView style = {styles.container}>
      {contacts.map(({uid,name,status}) => (
        <View key={uid} style = {styles.userCard}>
        <Text style = {styles.userName}>{name}</Text>
        <Text style = {styles.userStatus}>{status}</Text>
        </View>
      ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginTop: 8
    },
    container: {

    },
    userCard: {

    },
    userName: {},
    userStatus: {}
})