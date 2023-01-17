import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import AllItems from '../../../components/screens/postLogin/AllItems';

export type AllItemsParams = {
    AllItems: undefined;
};
const AllItemsStack = createStackNavigator<AllItemsParams>();

const AllItemsNavigator = () => {
  return (
    <AllItemsStack.Navigator
      initialRouteName="AllItems"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <AllItemsStack.Screen
        options={{headerShown: false}}
        name="AllItems"
        component={AllItems}
      />
    </AllItemsStack.Navigator>
  );
};

export default AllItemsNavigator;
