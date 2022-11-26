import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { store } from './src/app/store';
import CounterScreen from './src/features/counter/CounterScreen';
import { visitNavigator } from './src/features/visit/visitNavigator';
import { contactNavigator } from './src/features/contact/contactNavigator';
import { eventNavigator } from './src/features/event/eventNavigator';
import { allCodeNavigator } from './src/features/allCode/allCodeNavigator';
import { relationshipNavigator } from './src/features/relationship/relationshipNavigator';

const navigator = createBottomTabNavigator(
  {
    Visit: visitNavigator,
    Contact: contactNavigator,
    Counter: CounterScreen,
    Event: eventNavigator,
    AllCode: allCodeNavigator,
    Relationship: relationshipNavigator,
  },
  {
    initialRouteName: 'Visit',
  }
);
const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
