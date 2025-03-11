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

const App = () => {
  const [text, settext] = useState("")
  const [submit, setsubmit] = useState("")

  const handleSubmit = () => {
    setsubmit(text)
    settext('')
  }

  return (
    // --------User input---------------
    <View>
      <Text>User form</Text>
      <TextInput
        placeholder="Enter a text here"
        style={styles.input}
        value={text}
        onChangeText={(text) => settext(text)}
        multiline
        numberOfLines={1}
      />
      <Button title="Submit" onPress={handleSubmit}></Button>

      <Text>Result: {submit} </Text>
    </View >
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
  input: {},
});
