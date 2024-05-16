import React from 'react'
import {
    SafeAreaView, 
    View, 
    Text,
    StyleSheet, 
    useColorScheme, 
} from 'react-native'
function List1() : JSX.Element {
    const isLightMode = useColorScheme() === 'light'
return(
    <View style = {styles.container}>
        <Text style = {isLightMode ? styles.darkText : styles.whiteText}>
            Home
        </Text>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontStyle: 'italic',
    },
    darkText: {
        color: '#000000',
        fontSize: 18,
        fontStyle: 'italic',
    },
})

export default List1;