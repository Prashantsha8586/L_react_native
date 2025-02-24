
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {


  return (

    <SafeAreaView style={styles.container}>
      <Text>rocky bhi</Text>
      <Pressable>
        <Text>Press me </Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    backgroundColor:"yellow",
  }
})