import React from 'react';
import useHomeScreenViewModel from '../../../../services/viewModels/postLogin/useHomeScreenViewModel';
import {StyleSheet, Text, View} from 'react-native';
import {Typography} from '../../../../globalStyles/Typography';
import InputField from '../../../modules/InputField';
import * as Colors from '../../../../constants/colors';
import ProductList from '../../../modules/ProductList';
import CategoryList from '../../../modules/CategoryList';
import Search from '../../../../assets/search.png'

const HomeScreen = () => {
  const viewModel = useHomeScreenViewModel();

  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <Text style={Typography.HeaderFont}>Hi, Matt!</Text>
        <Text style={Typography.BodyFont}>You have x items expiring today</Text>
        <InputField value={''} onChange={() => {}} rightIcon={Search} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={Typography.SubHeaderFont}>Categories</Text>
        <CategoryList
          categories={viewModel.categories}
          setSelectedCategory={viewModel.onSelectCategory}
          selectedCategory={viewModel.selectedCategory}
        />
        <Text style={Typography.SubHeaderFont}>Products</Text>
        <ProductList products={viewModel.products} />
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
    flex: 1,
    alignItems: 'center',
  },
});
export default HomeScreen;
