import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AllItems = ({data}) => {
  return (
    <View>
      <View>
        <Text>Items</Text>
        <Text>Quantity</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Text>Items</Text>
            <Text>Quantity</Text>
          </View>
        )}
        contentContainerStyle={{gap:10}}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({});
