import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Product} from '../../../interfaces/Product';
import ProductItem from '../ProductItem';

interface ProductListRowProps {
  useBy: number;
  products: Product[];
  onRemove: (product: Product) => void;
}

const ProductListRow = (props: ProductListRowProps) => {
  return (
    <FlatList
      horizontal
      style={styles.flatList}
      data={props.products}
      ListFooterComponent={() => <View style={{padding: 5}} />}
      renderItem={({item, index}) => (
        <View style={{paddingHorizontal: 10}}>
          <ProductItem useBy={props.useBy} product={item} onRemove={props.onRemove}/>
        </View>
      )}></FlatList>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flexGrow: 0.9,
    marginTop: 0,
  },
});

export default ProductListRow;
