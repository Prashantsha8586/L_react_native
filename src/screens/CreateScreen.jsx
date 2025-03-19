import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const CreateScreen = ({data, setdata}) => {
  const [itemName, setitemName] = useState('');
  const [stockAmt, setstockAmt] = useState('');
  const [isEdit, setisEdit] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const addItemHandler = () => {
    const newItem = {
      id: data.now(),
      name: itemName,
      stock: stockAmt,
    };

    setdata([...data, newItem]);
    setitemName('');
    setstockAmt('');
    setisEdit(false);
  };

  const deleteItemHandler = id => {
    setdata(data.filter(item => item.id !== id));
  };

  const editItemHandler = item => {
    setisEdit(true);
    setitemName(item.name);
    setEditItemId(item.id);
  };

  const updateItemHandler = item => {
    setdata(
      data.map(item =>
        item.id === editItemId
          ? {...item, name: itemName, stock: stockAmt}
          : item,
      ),
    );
  };

  return (
    <View>
      <TextInput
        placeholder="Enter an item name..."
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={item => setitemName(item)}
      />
      <TextInput
        placeholder="Enter an stock amount.."
        placeholderTextColor="#999"
        style={styles.input}
        value={stockAmt}
        onChangeText={item => setstockAmt(item)}
      />

      <Pressable
        onPress={() => (isEdit ? updateItemHandler() : addItemHandler)}>
        <Text>Add Item in stock</Text>
      </Pressable>

      {/* ------------------------------------------- */}
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.stock}</Text>
              <View>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{gap: 10}}
        />
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
});
