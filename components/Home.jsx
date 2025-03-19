import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile', {id: 1, name: 'hero'})}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
