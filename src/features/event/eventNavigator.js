import { createStackNavigator } from 'react-navigation-stack';
import EventDetailScreen from './EventDetailScreen';
import EventListScreen from './EventListScreen';

export const eventNavigator = createStackNavigator(
  {
    Event: EventListScreen,
    EventDetail: EventDetailScreen,
  },
  {
    initialRouteName: 'Event',
    defaultNavigationOptions: {
      title: 'Sự kiện',
    },
  }
);
