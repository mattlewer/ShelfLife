import React from 'react';
import useHomeScreenViewModel from '../../../../services/viewModels/postLogin/useHomeScreenViewModel';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Typography} from '../../../../globalStyles/Typography';
import InputField from '../../../modules/InputField';
import * as Colors from '../../../../constants/colors';

import CategoryItem from '../../../modules/CategoryItem';

const HomeScreen = () => {
  const viewModel = useHomeScreenViewModel();
  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <Text style={Typography.HeaderFont}>Hi, Matt!</Text>
        <Text style={Typography.BodyFont}>You have x items expiring today</Text>
        <InputField value={''} onChange={() => {}} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={Typography.SubHeaderFont}>Categories</Text>
        <FlatList
          style={styles.flatList}
          ItemSeparatorComponent={() => <View style={{padding: 10}} />}
          ListHeaderComponent={() => <View style={{padding: 5}} />}
          ListFooterComponent={() => <View style={{padding: 5}} />}
          horizontal
          data={viewModel.categories}
          renderItem={({item}) => (
            <CategoryItem
              category={item}
              isSelected={viewModel.selectedCategory?.name === item.name}
              onSelect={viewModel.setSelectedCategory}
            />
          )}
          keyExtractor={item => item.name}
        />
        <Text style={Typography.SubHeaderFont}>Products</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  contentContainer: {
    alignItems: 'center',
  },
  flatList: {
    height: 100,
    marginBottom: 40,
  },
});
export default HomeScreen;
