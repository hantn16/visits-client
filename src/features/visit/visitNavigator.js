import { createStackNavigator } from 'react-navigation-stack';
import VisitDetail from './VisitDetail';
import VisitScreen from './VisitScreen';

export const visitNavigator = createStackNavigator(
  {
    VisitList: VisitScreen,
    Detail: VisitDetail,
  },
  {
    initialRouteName: 'VisitList',
    defaultNavigationOptions: {
      title: 'Thăm Hỏi',
    },
  }
);
