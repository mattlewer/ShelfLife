import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {epochToDateString} from '../../../services/helpers/epochToDateString';
import {Categories} from '../../../constants/categories';
import {Product} from '../../../interfaces/Product';
import {Typography} from '../../../globalStyles/Typography';
import * as Colors from '../../../constants/colors';
import * as Dimens from '../../../constants/dimens';
import Continue from '../../../assets/continue.png';

interface ProductItemProps {
  useBy: number;
  product: Product;
}
const ProductItem = (props: ProductItemProps) => {
  let tabColor = Categories.find(x => x.id === props.product.categoryId)?.color;
  return (
    <View style={styles.itemContainer}>
      <Pressable style={styles.buttonContainer}>
        <Image style={styles.image} source={Continue} />
      </Pressable>
      <View style={[styles.productInfoContainer, {borderLeftColor: tabColor}]}>
        <View style={styles.headerDetails}>
          <Text style={Typography.SubHeaderFont}>{props.product.name}</Text>
          <Text style={Typography.BodyFont}>£{props.product.price}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={Typography.Error}>{epochToDateString(props.useBy)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingTop: 20,
    height: 120,
    marginBottom: 50,
  },
  productInfoContainer: {
    borderLeftWidth: 10,
    paddingVertical: 15,
    backgroundColor: Colors.White,
    borderRadius: 9,
    width: Dimens.PRODUCT_ITEM_WIDTH,
    height: Dimens.PRODUCT_ITEM_HEIGHT,
    elevation: 3,
  },
  image: {
    height: 15,
    width: 15,
    zIndex: 200,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Primary,
    width: 25,
    height: 25,
    borderRadius: 25,
    position: 'absolute',
    zIndex: 100,
    top: 27,
    right: 7,
  },
  headerDetails: {
    paddingHorizontal: 15,
  },
  dateContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 5,
    alignItems: 'center',
  },
});

export default ProductItem;
