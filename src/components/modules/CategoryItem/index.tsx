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
      style={[styles.container, {marginBottom: props.isSelected ? 20 : 0}]}
      onPress={() => props.onSelect(props.category)}>
      <View style={styles.container}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: props.isSelected
                ? Colors.Primary
                : Colors.Secondary,
            },
          ]}>
          <Image style={styles.categoryIcon} source={props.category.uri}/>
        </View>
        <Text style={Typography.BodyFont}>{props.category.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    height: 48,
    width: 58,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIcon: {
    width:30,
    height:30,
  }
});

export default CategoryItem;
