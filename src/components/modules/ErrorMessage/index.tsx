import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ErrorIcon from '../../../assets/error.png';

interface ErrorMessageProps {
  message: string;
}
const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <View
      style={styles.errorContainer}>
      <Image
        source={ErrorIcon}
        style={styles.errorImg}
      />
      <Text>{props.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    errorContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    errorImg: {
        height: 15, width: 15, marginRight: 5
    },
  });

export default ErrorMessage;
