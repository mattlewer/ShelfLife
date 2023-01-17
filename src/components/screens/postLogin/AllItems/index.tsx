import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Typography} from '../../../../globalStyles/Typography';
import CategoryList from '../../../modules/CategoryList';
import ProductList from '../../../modules/ProductList';
import useAllItemsViewModel from '../../../../services/viewModels/postLogin/useAllItemsViewModel';
import InputField from '../../../modules/InputField';
import Search from '../../../../assets/search.png';
import * as Colors from '../../../../constants/colors';

const AllItemsScreen = () => {
  const viewModel = useAllItemsViewModel();

  return (
    <View style={styles.pageContainer}>
      <View style={styles.contentContainer}>
        <InputField value={''} onChange={() => {}} rightIcon={Search} />

        <Text style={Typography.SubHeaderFont}>Categories</Text>
        <CategoryList
          categories={viewModel.categories}
          setSelectedCategory={viewModel.onSelectCategory}
          selectedCategory={viewModel.selectedCategory}
        />
        <Text style={Typography.SubHeaderFont}>Items</Text>
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default AllItemsScreen;
