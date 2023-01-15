import React from 'react';
import { Text, View } from 'react-native';
import {useRecoilValue} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {sessionState} from './state/auth';
import PreLoginNavigation from './navigation/preLoginNav';

const Router = () => {
  const session = useRecoilValue(sessionState);

  return (
    <NavigationContainer>
      {session?.token_id ? (
          <View>
              <Text>Logged In</Text>
          </View>
      ) : (
        <PreLoginNavigation />
      )}
    </NavigationContainer>
  );
};

export default Router;
