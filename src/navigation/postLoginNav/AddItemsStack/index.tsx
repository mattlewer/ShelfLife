import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import AddItems from '../../../components/screens/postLogin/AddItems';

export type AddItemsParams = {
    AddItems: undefined;
};
const AddItemsStack = createStackNavigator<AddItemsParams>();

const AddItemsNavigator = () => {
  return (
    <AddItemsStack.Navigator
      initialRouteName="AddItems"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <AddItemsStack.Screen
        options={{headerShown: false}}
        name="AddItems"
        component={AddItems}
      />
    </AddItemsStack.Navigator>
  );
};

export default AddItemsNavigator;
