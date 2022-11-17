import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const EventDetailScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  return (
    <View>
      <Text>EventScreen</Text>
      <TextInput value={name} placeholder="Tên sự kiện" />
      <TextInput value={description} placeholder="Mô tả" />
    </View>
  );
};

export default EventDetailScreen;

const styles = StyleSheet.create({});
