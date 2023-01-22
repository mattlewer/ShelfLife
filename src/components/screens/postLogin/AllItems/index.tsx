import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {filterItemsCategory} from '../../../../services/helpers/filterItems';
import {Typography} from '../../../../globalStyles/Typography';
import {localise} from '../../../../services/lang/lang';
import useAllItemsViewModel from '../../../../services/viewModels/postLogin/useAllItemsViewModel';
import ProductList from '../../../modules/ProductList';
import * as Colors from '../../../../constants/colors';
import {ProductResponse} from '../../../../interfaces/Product';
import TextButton from '../../../modules/TextButton';

const AllItemsScreen = () => {
  const viewModel = useAllItemsViewModel();
  const [itemsToRender, setItemsToRender] = useState<
    undefined | ProductResponse[]
  >();

  useEffect(() => {
    setItemsToRender(viewModel.data);
    if (viewModel.selectedCategory) {
      setItemsToRender(
        filterItemsCategory(viewModel.data!, viewModel.selectedCategory),
      );
    }
  }, [viewModel.data, viewModel.selectedCategory]);

  return (
    <View style={styles.pageContainer}>
      <TextButton onPress={viewModel.onAddProduct} type={'Primary'} title={'add one'}/>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={Typography.HeaderFont}>All Items</Text>
          <Text style={Typography.BodyFont}>
            You have a total of x items
          </Text>
        </View>
        <View style={styles.listContainer}>
          {itemsToRender ? (
            <ProductList products={itemsToRender} onRemove={viewModel.onRemoveProduct}/>
          ) : (
            <Text style={{flex: 1, textAlignVertical: 'center'}}>
              {localise('NO_ITEMS')}
            </Text>
          )}
        </View>
        {/* <View style={styles.filterSearchSection}>
          <Text style={[Typography.SubHeaderFont, styles.categoriesText]}>
            {localise('CATEGORIES')}
          </Text>
          <CategoryList
            categories={Categories}
            setSelectedCategory={viewModel.onSelectCategory}
            selectedCategory={viewModel.selectedCategory}
          />
          <View style={styles.inputWrapper}>
            <InputField value={''} onChange={() => {}} rightIcon={Search} />
          </View>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width:'100%',
    backgroundColor: Colors.LightGrey,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    paddingTop: 30,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  filterSearchSection: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.LightGrey,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  inputWrapper: {
    marginTop: -10,
    width: '90%',
  },
  categoriesText: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingTop: 20,
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    flex: 1,
  },
});

export default AllItemsScreen;
