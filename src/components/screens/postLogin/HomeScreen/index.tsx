import React from 'react';
import useHomeScreenViewModel from '../../../../services/viewModels/postLogin/useHomeScreenViewModel';
import {StyleSheet, Text, View} from 'react-native';
import {Typography} from '../../../../globalStyles/Typography';
import InputField from '../../../modules/InputField';
import * as Colors from '../../../../constants/colors';
const HomeScreen = () => {
  const viewModel = useHomeScreenViewModel();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={Typography.HeaderFont}>Hi, Matt!</Text>
        <Text style={Typography.BodyFont}>You have x items expiring today</Text>
      </View>
      <InputField value={''} onChange={() => {}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: Colors.White,
  },
  headerContainer: {
      paddingVertical: 20,
  }
});
export default HomeScreen;
