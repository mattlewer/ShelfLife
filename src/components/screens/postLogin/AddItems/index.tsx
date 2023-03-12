import React from 'react';
import {View, StyleSheet} from 'react-native';
import AudioPlayback from '../../../modules/Slider';
const AddItems = () => {
  return (
    <View style={style.page}>
      <AudioPlayback audioUri={'test2.mp3'}/>
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
export default AddItems;
