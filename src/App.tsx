import React from 'react';
import {RecoilRoot} from 'recoil';
import Router from './Router';
import AppStartup from './AppStartup';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <RecoilRoot>
      <AppStartup>
        <Router />
      </AppStartup>
    </RecoilRoot>
  );
};

export default App;
