import React from 'react';
import {StyleSheet, View} from 'react-native';
import useLandingScreenViewModel from '../../../../services/viewModels/preLogin/useLandingScreenViewModel';
import InputField from '../../../modules/InputField';
import TextButton from '../../../modules/TextButton';
import ErrorMessage from '../../../modules/ErrorMessage';
import {localise} from '../../../../services/lang/lang';

const LandingPage = () => {
  const viewModel = useLandingScreenViewModel();
  return (
    <View style={styles.landingPageContainer}>
      <View>
        <InputField
          label={localise('EMAIL')}
          value={viewModel.email}
          onChange={e => viewModel.onEmailChange(e)}
        />
        <InputField
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
          title={localise('SIGN_IN')}
          onPress={viewModel.onSignIn}
        />
        <TextButton
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
    justifyContent: 'space-evenly'
  },
});

export default LandingPage;
