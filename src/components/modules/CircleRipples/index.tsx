import React from 'react';
import {StyleSheet, View, Image, Pressable} from 'react-native';
import {localise} from '../../../services/lang/lang';
import Ring from '../Ring';

interface CircleRipplesProps {
  isRecording: boolean;
  onPress: () => void;
}
const CircleRipples = (props: CircleRipplesProps) => {
  return (
    <View style={style.rippleContainer}>
      <Pressable style={style.iconContainer} onPress={props.onPress}>
      </Pressable>
      <Ring delay={0} isRecording={props.isRecording} />
      <Ring delay={500} isRecording={props.isRecording} />
      <Ring delay={2000} isRecording={props.isRecording} />
      <Ring delay={2500} isRecording={props.isRecording} />
    </View>
  );
};

const style = StyleSheet.create({
  rippleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    elevation: 10,
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#000',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default CircleRipples;