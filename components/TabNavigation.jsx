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
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import Home from 'react-native-vector-icons/AntDesign';
  import Icon from 'react-native-vector-icons/AntDesign';
  
  
  // -----> Stack <---------
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
  
  
  // -------> Tab< --------
  const Tab = createBottomTabNavigator();
  function TabNavigator() {
    return (
      <Tab.Navigator initialRouteName='Profile'
        screenOptions={{
          tabBarActiveTintColor: "red"
        }}>
        <Tab.Screen name="Home"
          component={Home}
          options={{
            tabBarIcon: () => {
              <Home name="home" size={30} color="red" />
            }
          }}
        />
        <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarIcon: ({size,color}) => {
              <Icon name="home" size={30} color={color} />
            }
          }}
        />
        <Tab.Screen name="Search" component={Search}
          options={{
            tabBarIcon: () => {
              <Icon name="home" size={30} color="red" />
            }
          }}
        />
      </Tab.Navigator>
    );
  }
  
  
  const App = () => {
  
  
    return (
      <NavigationContainer>
        {/* // --------Stack navigation--------------- */}
        {/* <StackNavigator /> */}
  
  
        {/* // -------> Tab< -------- */}
        <TabNavigator />
  
      </NavigationContainer>
    );
  };
  
  export default App;
  
  const styles = StyleSheet.create({
  
  });
  