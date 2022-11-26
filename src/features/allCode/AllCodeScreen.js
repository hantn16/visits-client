import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const AllCodeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>AllCodeScreen</Text>
      <Button
        title="Chuyển sang trang Detail"
        onPress={() => {
          navigation.navigate('AllCodeDetail');
        }}
      />
    </View>
  );
};

export default AllCodeScreen;

const styles = StyleSheet.create({});
