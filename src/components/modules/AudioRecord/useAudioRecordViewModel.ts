import {useState} from 'react';
import AudioRecord from 'react-native-audio-record';
import {Animated} from 'react-native';
import {
  requestAudioPermission,
  requestStoragePermission,
} from '../../../services/helpers/permissions';
import {Easing} from 'react-native-reanimated';

const useAudioRecordViewModel = (
  maximum_length: number,
  onSuccess: (uri: string) => void,
) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const count = useState(new Animated.Value(0))[0];

  const recorder = AudioRecord;
  const options = {
    sampleRate: 44100, // default 44100
    channels: 1, // 1 or 2, default 1
    bitsPerSample: 16, // 8 or 16, default 16
    audioSource: 1, // android only - MIC
    wavFile: 'FAKE' + '.wav',
  };

  const checkPermissions = async (): Promise<boolean> => {
    const hasAudioPerm = await requestAudioPermission();
    const hasStoragePerm = await requestStoragePermission();
    return hasAudioPerm && hasStoragePerm;
  };

  const onStart = async () => {
    const hasPermission = await checkPermissions();
    if (hasPermission) {
      setIsRecording(true);
      recorder.init(options);
      recorder.start();
      Animated.timing(count, {
        toValue: maximum_length,
        duration: maximum_length,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      count.addListener(progress => {
        const newDuration = Math.round(progress.value * 100) / 100;
        if (newDuration !== duration) {
          setDuration(newDuration);
          if (newDuration >= maximum_length) {
            onStop();
          }
        }
      });
    }
  };

  const onStop = async () => {
    setIsRecording(false);
    count.stopAnimation();
    const audioFile = await recorder.stop();
    onSuccess(audioFile);
    setDuration(0);
    count.setValue(0);
  };

  return {
    isRecording,
    duration,
    onStart,
    onStop,
  };
};

export default useAudioRecordViewModel;
