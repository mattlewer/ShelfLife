import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Product} from '../../../interfaces/Product';
import ProductItem from '../ProductItem';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface ProductListRowProps {
  useBy: number;
  products: Product[];
}

const ProductListRow = (props: ProductListRowProps) => {
  return (
    <FlatList
      horizontal
      style={styles.flatList}
      data={props.products}
      ListHeaderComponent={() => <View style={{padding: 5}} />}
      ListFooterComponent={() => <View style={{padding: 5}} />}
      renderItem={({item, index}) => (
        <View style={{paddingHorizontal: 20}}>
          <ProductItem useBy={props.useBy} product={item} />
        </View>
      )}></FlatList>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flexGrow: 0.9,
    marginTop: 10,
  },
});

export default ProductListRow;
