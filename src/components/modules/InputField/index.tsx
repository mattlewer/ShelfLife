import React from 'react';
import {TextInput, StyleSheet, Text} from 'react-native';
import * as Colors from '../../../constants/colors';

interface InputFieldProps {
  label?: string;
  value: string | undefined;
  onChange: (e:string) => void;
}

const InputField = (props: InputFieldProps) => {
  return (
    <>
      <Text>{props.label}</Text>
      <TextInput
        style={styles.inputField}
        value={props.value}
        onChangeText={props.onChange}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: Colors.Secondary, 
    borderRadius: 12,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
});
export default InputField;
