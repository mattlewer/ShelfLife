import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Typography} from '../../../../globalStyles/Typography';
import CategoryList from '../../../modules/CategoryList';
import ProductList from '../../../modules/ProductList';
import useAllProductsViewModel from '../../../../services/viewModels/postLogin/useAllProductsViewModel';
import InputField from '../../../modules/InputField';
import Search from '../../../../assets/search.png';

const AllProductsScreen = () => {
  const viewModel = useAllProductsViewModel();

  return (
    <View style={styles.contentContainer}>
      <InputField value={''} onChange={() => {}} rightIcon={Search} />

      <Text style={Typography.SubHeaderFont}>Categories</Text>
      <CategoryList
        categories={viewModel.categories}
        setSelectedCategory={viewModel.onSelectCategory}
        selectedCategory={viewModel.selectedCategory}
      />
      <Text style={Typography.SubHeaderFont}>Products</Text>
      <ProductList products={viewModel.products} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default AllProductsScreen;
