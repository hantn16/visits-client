import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, selectCount } from './counterSlice';

const CounterScreen = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increment());
  };

  const handleSubtract = () => {
    dispatch(decrement());
  };
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title="Add" onPress={handleAdd} />
      <Button title="Subtract" onPress={handleSubtract} />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
