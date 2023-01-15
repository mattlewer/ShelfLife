import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import LandingScreen from '../../components/screens/preLogin/LandingPage';

export type PreLoginStackParams = {
  LandingScreen: undefined;
};
const PreLoginStack = createStackNavigator<PreLoginStackParams>();

const PreLoginNavigation = () => {
  return (
    <PreLoginStack.Navigator
      initialRouteName="LandingScreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <PreLoginStack.Screen
        options={{headerShown: false}}
        name="LandingScreen"
        component={LandingScreen}
      />
    </PreLoginStack.Navigator>
  );
};

export default PreLoginNavigation;
