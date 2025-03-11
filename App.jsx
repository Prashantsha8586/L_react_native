import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

const App = () => {


  return (
    // --------Stack navigation---------------
    <View>
      <Text>App</Text>
      <Home/>
      <Profile/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({

});
