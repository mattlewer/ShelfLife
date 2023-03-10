import React from 'react';
import {StyleSheet, View} from 'react-native';
import {localise} from '../../../../services/lang/lang';
import InputField from '../../../modules/InputField';
import TextButton from '../../../modules/TextButton';
import ErrorMessage from '../../../modules/ErrorMessage';

import useLandingScreenViewModel from '../../../../services/viewModels/preLogin/useLandingScreenViewModel';

const LandingPage = () => {
  const viewModel = useLandingScreenViewModel();
  return (
    <View style={styles.landingPageContainer}>
      <View style={styles.textFieldContainer}>
        <InputField
          label={localise('EMAIL')}
          value={viewModel.email}
          onChange={e => viewModel.onEmailChange(e)}
        />
        <InputField
          secureTextEntry
          label={localise('PASSWORD')}
          value={viewModel.password}
          onChange={e => viewModel.onPasswordChange(e)}
        />
        {viewModel.useAuthHook.error !== '' && (
          <ErrorMessage message={viewModel.useAuthHook.error} />
        )}
      </View>
      <View>
        <TextButton
          type={'Primary'}
          title={localise('SIGN_IN')}
          onPress={viewModel.onSignIn}
        />
        <TextButton
          type={'Secondary'}
          title={localise('CREATE_ACCOUNT')}
          onPress={viewModel.onSignUp}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  landingPageContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
    justifyContent: 'space-evenly',
  },
  textFieldContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LandingPage;
