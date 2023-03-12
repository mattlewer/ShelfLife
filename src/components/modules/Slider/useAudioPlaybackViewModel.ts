import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {Animated} from 'react-native';
import {Easing} from 'react-native-reanimated';
import Sound from 'react-native-sound';

const useAudioPlaybackViewModel = (audioUri: string) => {
  const count = useState(new Animated.Value(0))[0];
  const [audioFile, setAudioFile] = useState<Sound>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const audioFile = new Sound(audioUri, '', error => {
        setDuration(audioFile.getDuration() * 1000);
      });
      setAudioFile(audioFile);
      return () => {
        audioFile.stop();
        audioFile.release();
        onPause();
      };
    }, []),
  );

  const onPlay = () => {
    if (audioFile) {
      audioFile.setCurrentTime(position / 1000);
      setIsPlaying(true);
      Sound.setCategory('Playback');
      audioFile!.play();
      Animated.timing(count, {
        toValue: duration,
        duration: duration - position,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      count.addListener(progress => {
        const newPosition = Math.round(progress.value * 100) / 100;
        if (newPosition !== position) {
          setPosition(newPosition);
          if (newPosition === duration) {
            onPause();
            setPosition(0);
            count.setValue(0);
          }
        }
      });
    }
  };

  const onPause = () => {
    if (audioFile) {
      audioFile!.pause();
      setIsPlaying(false);
      count.stopAnimation();
    }
  };

  const millisToTimeString = (millis: number) => {
    return new Date(millis).toISOString().slice(14, 19);
  };

  return {
    position,
    duration,
    count,
    isPlaying,
    onPlay,
    onPause,
    millisToTimeString,
  };
};

export default useAudioPlaybackViewModel;
