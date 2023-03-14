import React from 'react';
import {View, StyleSheet} from 'react-native';
import AudioPlayback from '../../../modules/AudioPlayback';
import usePlaybackScreenViewModel from './usePlaybackScreenViewModel';

const Playback = () => {
  const viewModel = usePlaybackScreenViewModel();
  return (
    <View style={style.page}>
      <AudioPlayback audioUri={viewModel.uri}/>
    </View>
  );
};
const style = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    padding: 16,
  },
});
export default Playback;
