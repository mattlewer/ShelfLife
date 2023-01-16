import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import * as Colors from '../../../constants/colors';
import {Typography} from '../../../globalStyles/Typography';
import {Category} from '../../../interfaces/Category';

interface CategoryItemProps {
  category: Category;
  isSelected: boolean;
  onSelect: (category: Category) => void;
}
const CategoryItem = (props: CategoryItemProps) => {
  return (
    <Pressable
      style={[styles.Container, {marginBottom: props.isSelected ? 20 : 0}]}
      onPress={() => props.onSelect(props.category)}>
      <View style={styles.Container}>
        <View
          style={[
            styles.IconContainer,
            {
              backgroundColor: props.isSelected
                ? Colors.Primary
                : Colors.Secondary,
            },
          ]}>
          {/* <Image source={{uri: props.category.uri}} /> */}
        </View>
        <Text style={Typography.BodyFont}>{props.category.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconContainer: {
    height: 48,
    width: 58,
    borderRadius: 20,
  },
});

export default CategoryItem;
