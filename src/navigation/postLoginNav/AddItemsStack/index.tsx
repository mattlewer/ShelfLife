import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import RecordScreen from '../../../components/screens/postLogin/Record';
import Playback from '../../../components/screens/postLogin/Playback';

export type AddItemsParams = {
  Record: undefined;
  Playback: {uri: string};
};
const AddItemsStack = createStackNavigator<AddItemsParams>();

const AddItemsNavigator = () => {
  return (
    <AddItemsStack.Navigator
      initialRouteName="Record"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <AddItemsStack.Screen
        options={{headerShown: false}}
        name="Record"
        component={RecordScreen}
      />
      <AddItemsStack.Screen
        options={{headerShown: false}}
        name="Playback"
        component={Playback}
      />
    </AddItemsStack.Navigator>
  );
};

export default AddItemsNavigator;
