import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AllItems from './AllItems';
import CreateScreen from './CreateScreen';

const HomeScreen = () => {
  const [view, setview] = useState(0);
  const [data, setdata] = useState([
    {id: 1, name: 'Wheat', stock: 5, unit: 'kg'},
    {id: 2, name: 'Wheat', stock: 5, unit: 'kg'},
  ]);

  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <View>
        <Pressable
          style={[
            styles.button,
            view === 0 ? {backgroundColor: 'green'} : null,
          ]}
          onPress={() => setview(0)}>
          <Text style={[styles.btnText, view === 0 ? {color: 'white'} : null]}>
            All Items
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            view === 0 ? {backgroundColor: 'green'} : null,
          ]}
          onPress={() => setview(1)}>
          <Text style={[styles.btnText, view === 0 ? {color: 'white'} : null]}>
            Low Stock
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            view === 0 ? {backgroundColor: 'green'} : null,
          ]}
          onPress={() => setview(2)}>
          <Text style={[styles.btnText, view === 0 ? {color: 'white'} : null]}>
            Create
          </Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data={data} />}
      {view === 1 && <AllItems data={data.filter(item => item.stock < 20)} />}
      {view === 2 && <CreateScreen data={data} setdata={setdata} />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  button: {},
  btnText: {},
});
