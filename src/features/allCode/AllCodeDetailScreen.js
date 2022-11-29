import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { ListItem, TextInput, Surface } from '@react-native-material/core';
import { Feather } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';

const AllCodeDetailScreen = ({ navigation }) => {
  const item = navigation.getParam('item', 1);
  const typeData = ['event', 'item'];
  const [showTypeList, setShowTypeList] = useState(false);
  const showSelectType = () => {
    setShowTypeList(true);
  };
  const selectType = () => {
    setShowTypeList(false);
  };
  const renderTypeItem = ({ item }) => {
    return (
      <ListItem
        style={styles.dropdownlist}
        title={item}
        onPress={selectType}
      ></ListItem>
    );
  };
  return (
    <View>
      <TextInput
        variant="outlined"
        label="Key"
        name="key"
        value={item.key}
        style={styles.textinput}
      />
      <TextInput
        variant="outlined"
        label="Value"
        name="value"
        value={item.value}
        style={styles.textinput}
      />
      <TextInput
        variant="outlined"
        label="Type"
        name="type"
        value={item.type}
        trailing={(props) => (
          <TouchableOpacity onPress={showSelectType}>
            <Feather name="chevron-down" size={24} />
          </TouchableOpacity>
        )}
        style={styles.textinput}
      />
      {showTypeList ? (
        <Surface style={styles.wrapper}>
          <FlatList
            data={typeData}
            keyExtractor={(item) => item}
            renderItem={renderTypeItem}
          ></FlatList>
        </Surface>
      ) : null}
    </View>
  );
};
AllCodeDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('item', null).key,
  };
};
export default AllCodeDetailScreen;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    margin: 16,
  },
  textinput: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  dropdownlist: {
    margin: 16,
  },
  wrapper: {
    marginHorizontal: 16,
  },
});
