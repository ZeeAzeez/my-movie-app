import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ReusableTexts = ({text, family, size, color}) => {
  return (
    <View>
      <Text style={styles.textStyle(family, size, color)}>{text}</Text>
    </View>
  )
}

export default ReusableTexts

const styles = StyleSheet.create({
  textStyle: (family, size, color)=> ({
      fontFamily: family,
      fontSize: size,
      color: color
  })
})