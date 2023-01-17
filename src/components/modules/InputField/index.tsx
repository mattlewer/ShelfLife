import React from 'react';
import {TextInput, StyleSheet, Text, View, Image} from 'react-native';
import {Typography} from '../../../globalStyles/Typography';
import * as Colors from '../../../constants/colors';

interface InputFieldProps {
  label?: string;
  value: string | undefined;
  onChange: (e:string) => void;
  rightIcon?: HTMLImageElement;
}

const InputField = (props: InputFieldProps) => {
  return (
    <View style={styles.inputFieldContainer}>
      <Text style={Typography.BodyFont}>{props.label}</Text>
      <TextInput
        style={[styles.inputField, Typography.BodyFont]}
        value={props.value}
        onChangeText={props.onChange}
      />
      <Image source={props.rightIcon} style={styles.inputIcon}/>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFieldContainer: {
    position: 'relative',
    width: '90%',
  },
  inputField: {
    backgroundColor: Colors.Secondary, 
    borderRadius: 12,
    marginBottom: 10,
    paddingRight: 50,
    paddingLeft: 15,
  },
  inputIcon: {
    position: 'absolute',
    right: 10,
    top: 28,
    height: 30,
    width: 30,
  }
});
export default InputField;
