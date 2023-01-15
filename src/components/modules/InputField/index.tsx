import React from 'react';
import {TextInput, StyleSheet, Text} from 'react-native';

interface InputFieldProps {
  label: string;
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
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
});
export default InputField;
