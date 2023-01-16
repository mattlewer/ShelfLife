import React from 'react';
import { Text, View } from 'react-native';
import {useRecoilValue} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {sessionState} from './state/auth';
import PreLoginNavigation from './navigation/preLoginNav';
import HomeScreen from './components/screens/postLogin/HomeScreen';

const Router = () => {
  const session = useRecoilValue(sessionState);

  return (
    <NavigationContainer>
      {session?.token_id ? (
          <HomeScreen/>
      ) : (
        <PreLoginNavigation />
      )}
    </NavigationContainer>
  );
};

export default Router;
