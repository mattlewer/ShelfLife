import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import useAudioPlaybackViewModel from './useAudioPlaybackViewModel';

interface AuioPlaybackProps{
    audioUri: string;
}
const AudioPlayback = (props: AuioPlaybackProps) => {
  const viewModel = useAudioPlaybackViewModel(props.audioUri);
  return (
    <View style={style.container}>
      <Slider
        containerStyle={{width: '100%'}}
        thumbStyle={style.thumbstyle}
        trackStyle={style.trackstyle}
        maximumTrackTintColor={'#e8e8e8'}
        minimumTrackTintColor={'#C23400'}
        thumbTintColor={'#eee'}
        value={viewModel.position}
        minimumValue={0}
        maximumValue={viewModel.duration}
        onSlidingStart={viewModel.onPause}
        onSlidingComplete={value => {
          value = Array.isArray(value) ? value[0] : value;
          viewModel.count.setValue(value);
        }}
      />
      <View style={style.timeText}>
        <Text>{viewModel.millisToTimeString(viewModel.position)}</Text>
        <Text>{viewModel.millisToTimeString(viewModel.duration)}</Text>
      </View>
      <Button
        title={viewModel.isPlaying ? 'PAUSE' : 'PLAY'}
        onPress={viewModel.isPlaying ? viewModel.onPause : viewModel.onPlay}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackstyle: {
    height: 10,
  },
  thumbstyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: '#C23400',
    borderWidth: 4,
  },
  timeText:{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
  }
});
export default AudioPlayback;
