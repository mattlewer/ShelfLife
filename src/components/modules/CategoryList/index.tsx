import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Category} from '../../../interfaces/Category';
import CategoryItem from '../CategoryItem';

interface CategoryListProps {
  categories: Category[];
  selectedCategory?: Category;
  setSelectedCategory: (category: Category) => void;
}
const CategoryList = (props: CategoryListProps) => {
  return (
    <View style={styles.flatList}>
      <FlatList
        style={styles.flatList}
        ItemSeparatorComponent={() => <View style={{padding: 10}} />}
        ListHeaderComponent={() => <View style={{padding: 5}} />}
        ListFooterComponent={() => <View style={{padding: 5}} />}
        horizontal
        data={props.categories}
        renderItem={({item}) => (
          <CategoryItem
            key={item.name}
            category={item}
            isSelected={props.selectedCategory?.name === item.name}
            onSelect={props.setSelectedCategory}
          />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    height: 90,
  },
});

export default CategoryList;
