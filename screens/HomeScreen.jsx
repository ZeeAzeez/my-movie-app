import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.MovieText}>Movie App</Text>
      <View style={styles.searchContainer}>
        <TextInput
        style={styles.searchBar}
        placeholder="Search for a movie.."
        placeholderTextColor="black"
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    MovieText:{
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    searchContainer: {
        backgroundColor: 'rgb(236, 224, 250)',
        borderRadius: 20,
        padding: 15,
        marginHorizontal: 15,
      },
      searchBar: {
        fontSize: 14,
        color: 'black',
        paddingHorizontal: 10,
      },
})