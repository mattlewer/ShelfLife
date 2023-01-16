import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import * as Colors from '../../../constants/colors';

interface TextButtonProps {
  type: 'Primary' | 'Secondary';
  onPress: () => void;
  title: string;
}

const TextButton = (props: TextButtonProps) => {

  let containerStyle;
  let textStyle;
  switch (props.type){
    case 'Primary':
      containerStyle = [styles.button, styles.buttonPrimary];
      textStyle = styles.buttonPrimaryText
      break;
    case 'Secondary':
      containerStyle = [styles.button, styles.buttonSecondary];
      textStyle = styles.buttonSecondaryText
      break;
  }

  return (
    <Pressable
      style={containerStyle}
      onPress={props.onPress}>
      <Text style={textStyle}>{props.title}</Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonPrimary: {
    backgroundColor: Colors.Primary,
  },
  buttonPrimaryText:{
    color: Colors.White,
  },
  buttonSecondary: {
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.Primary,
  },
  buttonSecondaryText:{
    color: Colors.Primary,
  },
  disabled: {
    opacity: 0.4,
  },
});

export default TextButton;
