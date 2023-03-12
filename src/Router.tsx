import React from 'react';
import {useRecoilValue} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {sessionState} from './state/auth';
import PreLoginNavigation from './navigation/preLoginNav';

import HomeNavigator from './navigation/postLoginNav/HomeStack';
import AllItemsNavigator from './navigation/postLoginNav/AllItemsStack';
import AddItemsNavigator from './navigation/postLoginNav/AddItemsStack';

const Tab = createBottomTabNavigator();

const Router = () => {
  const session = useRecoilValue(sessionState);

  return (
    <NavigationContainer>
      {session?.token_id ? (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            unmountOnBlur: true,
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#000',
            tabBarActiveBackgroundColor: '#eee',
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#FFF',
            },
            tabBarItemStyle: {
              paddingBottom: 20,
            },
          }}>
          <Tab.Screen component={HomeNavigator} name="Home" />
          <Tab.Screen component={AllItemsNavigator} name="All Items" />
          <Tab.Screen component={AddItemsNavigator} name="Add Items" />
        </Tab.Navigator>
      ) : (
        <PreLoginNavigation />
      )}
    </NavigationContainer>
  );
};

export default Router;
