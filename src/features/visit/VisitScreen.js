import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const VisitScreen = ({ navigation }) => {
  return (
    <View>
      <Text>VisitScreen</Text>
      <Button
        title="Chuyển sang trang Detail"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
};

export default VisitScreen;

const styles = StyleSheet.create({});
