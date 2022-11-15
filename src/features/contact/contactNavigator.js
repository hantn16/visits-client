import { createStackNavigator } from 'react-navigation-stack';
import ContactDetailScreen from './ContactDetailScreen';
import ContactScreen from './ContactScreen';

export const contactNavigator = createStackNavigator(
  {
    Contact: ContactScreen,
    ContactDetail: ContactDetailScreen,
  },
  {
    initialRouteName: 'Contact',
    defaultNavigationOptions: {
      title: 'Đối tượng',
    },
  }
);
