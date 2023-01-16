import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {Product} from '../../../interfaces/Product';
import * as Colors from '../../../constants/colors';
import {Typography} from '../../../globalStyles/Typography';
import Continue from '../../../assets/continue.png';

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
          <Text style={Typography.SubHeaderFont}>Apples</Text>
          <Text style={Typography.BodyFont}>£{props.product.price}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={Typography.Error}>{props.useBy.toLocaleString()}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingTop: 30,
    height: 120,
    marginBottom: 50,
  },
  productInfoContainer: {
    backgroundColor: Colors.Secondary,
    borderRadius: 20,
    width: 147,
    height: 121,
    justifyContent: 'center',
  },
  imageContainer: {
    backgroundColor: Colors.Grey,
    width: 60,
    height: 60,
    borderRadius: 50,
    position: 'absolute',
    top: 0,
    left: -20,
    zIndex: 100,
  },
  image: {
    height: 20,
    width: 20,
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
    top: 37,
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
