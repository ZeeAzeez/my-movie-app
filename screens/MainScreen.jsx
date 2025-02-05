import { StyleSheet, View, ScrollView, TextInput} from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ReusableTexts } from '../components'
import { SearchBar } from 'react-native-elements'


const MainScreen = () => {
    const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={styles.container}>
   
   {/* <ReusableTexts text="Movie Apps for me" family="Arial" size={24} color="green" /> */}

   <View>
    <Text>Movie App Menu </Text>
   </View>

      <SearchBar
      placeholder='search movies..'
      onChangeText={setSearch}
      value={search}
      containerStyle={styles.searchContainer}
      inputStyle={styles.searchInput}
      placeholderTextColor="black"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
      },
      searchContainer: {
        backgroundColor: 'yellow',
        borderRadius: 10,
        marginTop: 10,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
      },
      searchInput: {
        color: 'black',
      },
})

export default MainScreen;