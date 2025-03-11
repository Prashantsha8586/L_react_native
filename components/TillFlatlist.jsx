import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';

const App = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const dummy = [
    {id: 1, name: 'asdf', email: 'emaol@aldlfmi', image: 'image1'},
  ];

  return (
    // <SafeAreaView style={[styles.container, {
    //   backgroundColor: isDarkMode ? "black" : "white"
    // }]}>

    // --------Scroll view----------------
    // <ScrollView contentContainerStyle={{gap: 10}} horizontal>
    //   <SafeAreaView style={styles.container}>
    //     <Text style={styles.text}>rocky bhai</Text>
    //     <Pressable>
    //       <Text>Press me </Text>
    //     </Pressable>
    //   </SafeAreaView>
    // </ScrollView>

    // --------------Flat list----------------
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummy}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image style={{width: 40}} src="" />
            <Text>Name</Text>
            <Text>Email</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<View style={{height: 10}} />}
        numColumns={3}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        // extraData={}
        // horizontal
        
      />
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
