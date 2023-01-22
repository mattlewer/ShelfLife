import React, { useState } from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {Categories} from '../../../constants/categories';
import {Product} from '../../../interfaces/Product';
import {Typography} from '../../../globalStyles/Typography';
import * as Colors from '../../../constants/colors';
import * as Dimens from '../../../constants/dimens';
import Tick from '../../../assets/tick.png';

interface ProductItemProps {
  useBy: number;
  product: Product;
  onRemove: (product: Product) => void;
}
const ProductItem = (props: ProductItemProps) => {
  let tabColor = Categories.find(x => x.id === props.product.categoryId)?.color;
  const [pressed, setPressed] = useState(false);

  const onSelect = () => {
    setPressed(true);
    props.onRemove(props.product);
  }

  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={[styles.buttonContainer,{borderColor: tabColor, backgroundColor: pressed ? tabColor : Colors.LightGrey}]} onPress={onSelect}>
        {pressed && (
          <Image style={[styles.image, {tintColor: Colors.White}]} source={Tick} />
        )}
      </Pressable>
      <View style={[styles.productInfoContainer, {borderLeftColor: tabColor}]}>
        <View style={styles.headerDetails}>
          <Text style={Typography.SubHeaderFont}>{props.product.name}</Text>
          <Text style={Typography.BodyFont}>£{props.product.price}</Text>
        </View>
        {/* <View style={styles.dateContainer}>
          <Text style={Typography.Error}>{epochToDateString(props.useBy)}</Text>
        </View> */}
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
    width: 27,
    height: 27,
    borderRadius: 25,
    position: 'absolute',
    zIndex: 100,
    top: 27,
    right: 7,
    borderWidth: 1,
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
