import {useState} from 'react';
import {Category} from '../../../interfaces/Category';
import {Product, ProductResponse} from '../../../interfaces/Product';

const useAllItemsViewModel = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    undefined | Category
  >();

  const onSelectCategory = (category: Category) => {
    if (selectedCategory?.name === category.name) {
      setSelectedCategory(undefined);
    } else {
      setSelectedCategory(category);
      
    }
  };
  const [products, setProducts] = useState<ProductResponse[]>([
    {
      useBy: 1673905293,
      items: [{id: 1, name: 'Apples', price: 2.5, categoryId: 3}],
    },
    {
      useBy: 1673998093,
      items: [
        {id: 5, name: 'Aaaaaa', price: 12.2, categoryId: 2},
        {id: 6, name: 'Bbbbbb', price: 2.5, categoryId: 1},
        {id: 7, name: 'Ccccc', price: 1, categoryId: 5},
        {id: 8, name: 'Ddddddd', price: 6, categoryId: 4},
        {id: 9, name: 'Eeeeee', price: 1, categoryId: 7},
        {id: 10, name: 'Other', price: 2, categoryId: 6},
      ],
    },
  ]);

  return {
    selectedCategory,
    onSelectCategory,
    products,
  };
};

export default useAllItemsViewModel;
