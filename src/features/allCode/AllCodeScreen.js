import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { ListItem } from '@react-native-material/core';
import { useDispatch, useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { getAllCodes, selectAllCodes } from './allCodeSlice';

const AllCodeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCodes());
  }, [dispatch]);

  const allCodes = useSelector((state) => state.allCodes.entities);
  console.log(allCodes);
  const renderItem = ({ item }) => {
    return (
      <ListItem
        title={`${item.key} - ${item.value} - ${item.type}`}
        trailing={(props) => (
          <TouchableOpacity onPress={() => console.log('delete')}>
            <Feather name="trash-2" {...props} size={26} />
          </TouchableOpacity>
        )}
        onPress={() => {
          navigation.navigate('AllCodeDetail', { item });
        }}
      />
    );
  };
  return (
    <View>
      <Text style={styles.title}>DANH SÁCH KEY</Text>
      <FlatList
        data={allCodes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
AllCodeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AllCodeDetail');
        }}
      >
        <Feather style={styles.iconPlus} name="plus" />
      </TouchableOpacity>
    ),
  };
};
export default AllCodeScreen;

const styles = StyleSheet.create({
  title: {},
  iconPlus: { fontSize: 40 },
});
