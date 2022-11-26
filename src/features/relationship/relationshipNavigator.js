import { createStackNavigator } from 'react-navigation-stack';
import RelationshipDetailScreen from './RelationshipDetailScreen';
import RelationshipScreen from './RelationshipScreen';

export const relationshipNavigator = createStackNavigator(
  {
    Relationship: RelationshipScreen,
    RelationshipDetailScreen: RelationshipDetailScreen,
  },
  {
    initialRouteName: 'Relationship',
    defaultNavigationOptions: {
      title: 'Mối quan hệ',
    },
  }
);
