import {useState} from 'react';
import {Category} from '../../../interfaces/category';

const useHomeScreenViewModel = () => {
  const [selectedCategory, setSelectedCategory] = useState<undefined | Category>();

  const categories: Category[] = [
    {name: 'Meat', uri: ''},
    {name: 'Veg', uri: ''},
    {name: 'Fruit', uri: ''},
    {name: 'Dairy', uri: ''},
    {name: 'Juice', uri: ''},
    {name: 'Baked', uri: ''},
    {name: 'Snacks', uri: ''},
  ];
  return {
    selectedCategory,
    setSelectedCategory,
    categories,
  };
};

export default useHomeScreenViewModel;
