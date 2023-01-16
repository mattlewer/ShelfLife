import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../../../components/screens/postLogin/HomeScreen';

export type HomeStackParams = {
    HomeScreen: undefined;
};
const HomeStack = createStackNavigator<HomeStackParams>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <HomeStack.Screen
        options={{headerShown: true}}
        name="HomeScreen"
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
