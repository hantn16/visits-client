import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const EventListScreen = ({ data }) => {
  return (
    <View>
      <Text>EventScreen</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => item}
      />
    </View>
  );
};

export default EventListScreen;

const styles = StyleSheet.create({});
