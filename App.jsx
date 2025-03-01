import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';

const App = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  return (
    // <SafeAreaView style={[styles.container, {
    //   backgroundColor: isDarkMode ? "black" : "white"
    // }]}>

    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>rocky bhai</Text>
      <Pressable>
        <Text>Press me </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow',
  },
  button: {
    paddingHorizontal: 10,
  },

  text: {
    color: isDarkMode ? 'white' : 'black',
  },
});
