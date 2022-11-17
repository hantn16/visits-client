import { createStackNavigator } from 'react-navigation-stack';
import AllCodeDetailScreen from './AllCodeDetailScreen';
import AllCodeScreen from './AllCodeScreen';

export const allCodeNavigator = createStackNavigator(
  {
    AllCode: AllCodeScreen,
    AllCodeDetail: AllCodeDetailScreen,
  },
  {
    initialRouteName: 'AllCode',
    defaultNavigationOptions: {
      title: 'Khóa',
    },
  }
);
