import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import * as Colors from '../../../constants/colors';

const LoadingOverlay = () => {
  return (
    <View style={styles.loadingOverlayContainer}>
      <ActivityIndicator color={Colors.Primary} size={"large"}/>
    </View>
  );
};
const styles = StyleSheet.create({
  loadingOverlayContainer: {
    position: 'absolute',
    zIndex: 300,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.Grey + '55',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LoadingOverlay;
