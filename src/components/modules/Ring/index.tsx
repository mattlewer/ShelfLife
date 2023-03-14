import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface RingProps {
  delay: number;
  isRecording: boolean;
}
const Ring = (props: RingProps) => {
  const ring = useSharedValue(0);
  const style = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - ring.value,
      transform: [{scale: interpolate(ring.value, [0, 1], [0.95, 4])}],
    };
  });
  useEffect(() => {
    props.isRecording
      ? (ring.value = withDelay(
          props.delay,
          withRepeat(
            withTiming(1, {
              duration: 4000,
            }),
            -1,
          ),
        ))
      : (ring.value = 0);
  }, [props.isRecording]);
  return <Animated.View style={[ringStyles.ringStyle, style]} />;
};

const ringStyles = StyleSheet.create({
  ringStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: '#777',
    position: 'absolute',
  },
});

export default Ring;