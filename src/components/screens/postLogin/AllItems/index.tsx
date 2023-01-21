import React, {useEffect} from 'react';
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
import TextButton from '../../../modules/TextButton';
import {ProductResponse} from '../../../../interfaces/Product';

const AllItemsScreen = () => {
  const viewModel = useAllItemsViewModel();
  let itemsToRender: undefined | ProductResponse[];

  useEffect(() => {
    itemsToRender = viewModel.data;
    if (viewModel.selectedCategory) {
      itemsToRender = filterItemsCategory(
        viewModel.data!,
        viewModel.selectedCategory,
      );
    }
  }, [viewModel.data]);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.contentContainer}>
        <TextButton
          title={'Add'}
          type={'Primary'}
          onPress={viewModel.onAddProduct}
        />
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
          {viewModel.data !== undefined ? (
            <ProductList products={viewModel.data} />
          ) : (
            <Text style={{flex: 1, textAlignVertical: 'center'}}>
              {localise('NO_ITEMS')}
            </Text>
          )}
        </View>
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
  listContainer: {
    paddingTop: 10,
    backgroundColor: Colors.LightGrey,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    flex: 1,
  },
});

export default AllItemsScreen;
