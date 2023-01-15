import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

interface TextButtonProps {
  onPress: () => void;
  title: string;
}

const TextButton = (props: TextButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 5,
    height: 45,
    marginBottom: 10,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
});

export default TextButton;
