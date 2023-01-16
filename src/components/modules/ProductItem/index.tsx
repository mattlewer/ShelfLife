import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {Product} from '../../../interfaces/Product';
import {Typography} from '../../../globalStyles/Typography';
import * as Colors from '../../../constants/colors';
import * as Dimens from '../../../constants/dimens';
import Continue from '../../../assets/continue.png';
import { epochToDateString } from '../../../services/helpers/epochToDateString';

interface ProductItem {
  useBy: number;
  product: Product;
}
const ProductItem = (props: ProductItem) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}></View>
      <Pressable style={styles.buttonContainer}>
        <Image style={styles.image} source={Continue} />
      </Pressable>
      <View style={styles.productInfoContainer}>
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
    backgroundColor: Colors.Secondary,
    borderRadius: 20,
    width: Dimens.PRODUCT_ITEM_WIDTH,
    height: Dimens.PRODUCT_ITEM_HEIGHT,
    justifyContent: 'center',
    elevation: 3,
  },
  imageContainer: {
    backgroundColor: '#D9D9D9',
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    top: 0,
    left: -20,
    zIndex: 100,
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
    width: 30,
    height: 30,
    borderRadius: 30,
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
