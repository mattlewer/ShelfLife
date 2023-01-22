import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Product, ProductResponse} from '../../../interfaces/Product';
import {Typography} from '../../../globalStyles/Typography';
import ProductItem from '../ProductItem';
import {epochToDateString} from '../../../services/helpers/epochToDateString';
import * as Dimens from '../../../constants/dimens';

interface ProductListProps {
  products: ProductResponse[];
  onRemove: (product: Product) => void;
}
const ProductList = (props: ProductListProps) => {
  return (
    <FlatList
      style={styles.flatList}
      data={props.products}
      renderItem={({item, index}) => (
        <View key={index}>
          <View style={styles.dateSectionHeader}>
            <Text style={Typography.ListDateHeader}>
              {epochToDateString(item.useBy)}
            </Text>
          </View>
          <View style={styles.productContainer}>
            {item.items.map((product, index) => {
              return (
                <ProductItem
                  key={product.id}
                  useBy={item.useBy}
                  product={product}
                  onRemove={props.onRemove}
                />
              );
            })}
            {item.items.length % 2 !== 0 ? (
              <View
                style={{
                  width: Dimens.PRODUCT_ITEM_WIDTH,
                  height: Dimens.PRODUCT_ITEM_HEIGHT,
                }}
              />
            ) : null}
          </View>
        </View>
      )}></FlatList>
  );
};

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
    flex: 1,
  },
  dateSectionHeader: {
    height: 40,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  productContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
});

export default ProductList;
