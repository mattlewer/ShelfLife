import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {ProductResponse} from '../../../interfaces/Product';
import {Typography} from '../../../globalStyles/Typography';
import ProductItem from '../ProductItem';
import {epochToDateString} from '../../../services/helpers/epochToDateString';
import * as Dimens from '../../../constants/dimens';
import {localise} from '../../../services/lang/lang';

interface ProductListProps {
  products: ProductResponse[];
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
              {epochToDateString(item.useBy) ===
                epochToDateString(Date.now() / 1000) && localise('TODAY')}
              {epochToDateString(item.useBy) ===
                epochToDateString((Date.now() + 86400000) / 1000) &&
                localise('TOMORROW')}
            </Text>
          </View>
          <View style={styles.productContainer}>
            {item.items.map((product, index) => {
              return (
                <ProductItem key={index} useBy={item.useBy} product={product} />
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
