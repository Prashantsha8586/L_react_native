import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View>
      <Text>Search</Text>
      <Button title="Search" onPress={() => navigation.navigate("Search")} />

    </View>
  )
}

export default Search

const styles = StyleSheet.create({})