import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation,route}) => {

  console.log(route.params)
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Search" onPress={() => navigation.navigate("Search")} />

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})