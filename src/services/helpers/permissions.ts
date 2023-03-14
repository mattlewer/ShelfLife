import {Platform} from 'react-native';
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';

export const requestStoragePermission = async () => {
  if (Platform.OS === 'android') {
    const statuses = await requestMultiple([
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ]);
    return (
      statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] === 'granted' &&
      statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE] === 'granted'
    );
  } else {
    return true;
  }
};

export const requestAudioPermission = async () => {
  if (Platform.OS === 'android') {
    const statuses = await requestMultiple([PERMISSIONS.ANDROID.RECORD_AUDIO]);
    return statuses[PERMISSIONS.ANDROID.RECORD_AUDIO] === 'granted';
  } else {
    const statuses = await requestMultiple([PERMISSIONS.IOS.MICROPHONE]);
    return statuses[PERMISSIONS.IOS.MICROPHONE] === 'granted';
  }
};
