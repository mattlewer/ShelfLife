import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import { Typography } from '../../../globalStyles/Typography';
import { localise } from '../../../services/lang/lang';
import {Product, ProductResponse} from '../../../interfaces/Product';
import * as Colors from '../../../constants/colors';
import ProductItem from '../ProductItem';


interface ProductListRowProps {
  title: string;
  products?: ProductResponse;
  onRemove: (product: Product) => void;
}

const ProductListRow = (props: ProductListRowProps) => {
  return (
    <View style={styles.listContainer}>
      <Text style={[Typography.SubHeaderFont, styles.sectionHeaderList]}>
        {props.title}
      </Text>
      {props.products ? (
        <FlatList
          horizontal
          style={styles.flatList}
          data={props.products.items}
          ListFooterComponent={() => <View style={{padding: 5}} />}
          renderItem={({item, index}) => (
            <View style={{paddingHorizontal: 10}}>
              <ProductItem
                useBy={props.products?.useBy!}
                product={item}
                onRemove={props.onRemove}
              />
            </View>
          )}></FlatList>
      ) : (
        <View style={styles.noItemsTextContainer}>
          <Text>{localise('NO_ITEMS')}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: Colors.OnBackground,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingTop: 10,
    minHeight: 200,
    marginBottom: 10,
  },
  flatList: {
    flexGrow: 1,
    marginTop: 0,
  },
  noItemsTextContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeaderList: {
    paddingHorizontal: 20,
  },
});

export default ProductListRow;
