import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import useAudioRecordViewModel from './useAudioRecordViewModel';
import {millisToTimeString} from '../../../services/helpers/millisToTimeString';
import CircleRipples from '../CircleRipples';

interface AudioRecordProps {
  maxLength: number;
  onSuccess: (uri: string) => void;
}
const AudioRecord = (props: AudioRecordProps) => {
  const viewModel = useAudioRecordViewModel(props.maxLength, props.onSuccess);
  return (
    <View style={style.container}>
      <CircleRipples
        isRecording={viewModel.isRecording}
        onPress={viewModel.isRecording ? viewModel.onStop : viewModel.onStart}
      />
      <Text style={style.timeText}>
        {millisToTimeString(viewModel.duration)}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  timeText: {
    fontSize: 30,
  },
});
export default AudioRecord;
