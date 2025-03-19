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
  import Search from './src/screens/Search';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { NavigationContainer } from '@react-navigation/native';
  
  const Stack = createNativeStackNavigator();
  
  const StackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "red",
  
            }
          }}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
  
        />
        <Stack.Screen
          name='Search'
          component={Search}
  
        />
      </Stack.Navigator>
    )
  }
  
  
  const App = () => {
  
  
    return (
      // --------Stack navigation---------------
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    );
  };
  
  export default App;
  
  const styles = StyleSheet.create({
  
  });
  