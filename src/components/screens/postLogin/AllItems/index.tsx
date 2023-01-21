import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {filterItemsCategory} from '../../../../services/helpers/filterItems';
import {Categories} from '../../../../constants/categories';
import {Typography} from '../../../../globalStyles/Typography';
import {localise} from '../../../../services/lang/lang';
import useAllItemsViewModel from '../../../../services/viewModels/postLogin/useAllItemsViewModel';
import CategoryList from '../../../modules/CategoryList';
import ProductList from '../../../modules/ProductList';
import InputField from '../../../modules/InputField';
import Search from '../../../../assets/search.png';
import * as Colors from '../../../../constants/colors';

const AllItemsScreen = () => {
  const viewModel = useAllItemsViewModel();

  let itemsToRender = viewModel.products;
  if (viewModel.selectedCategory) {
    itemsToRender = filterItemsCategory(
      viewModel.products,
      viewModel.selectedCategory,
    );
  }

  return (
    <View style={styles.pageContainer}>
      <View style={styles.contentContainer}>
        <InputField value={''} onChange={() => {}} rightIcon={Search} />
        <View>
          <Text
            style={[
              Typography.SubHeaderFont,
              {alignSelf: 'flex-start', paddingLeft: 20, paddingTop: 20},
            ]}>
            {localise('CATEGORIES')}
          </Text>
          <CategoryList
            categories={Categories}
            setSelectedCategory={viewModel.onSelectCategory}
            selectedCategory={viewModel.selectedCategory}
          />
        </View>
        <View style={styles.listContainer}>
          <Text style={Typography.SubHeaderFont}>{localise('ITEMS')}</Text>
          <ProductList products={itemsToRender} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    paddingBottom: 40,
    flex: 1,
    backgroundColor: Colors.White,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  listContainer: {
    paddingTop: 10,
    backgroundColor: Colors.LightGrey,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
  },
});

export default AllItemsScreen;
