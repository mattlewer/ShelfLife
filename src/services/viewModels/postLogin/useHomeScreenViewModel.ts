import {useState} from 'react';
import {Category} from '../../../interfaces/Category';

const useHomeScreenViewModel = () => {
  const [selectedCategory, setSelectedCategory] = useState<undefined | Category>();

  const onSelectCategory = (category: Category) => {
    if(selectedCategory?.name === category.name){
      setSelectedCategory(undefined);
    }else{
      setSelectedCategory(category);
    }
  };

  const categories: Category[] = [
    {name: 'Meat', uri: ''},
    {name: 'Veg', uri: ''},
    {name: 'Fruit', uri: ''},
    {name: 'Dairy', uri: ''},
    {name: 'Juice', uri: ''},
    {name: 'Baked', uri: ''},
    {name: 'Snacks', uri: ''},
  ];

  const [products, setProducts] = useState([
    {
      useBy: 1673905293,
      items: [
        {id: 1, name: 'Apples', price: 2.50},
        {id: 2, name: 'Oranges', price: 2},
        {id: 3, name: 'Bread', price: 1},
        {id: 4, name: 'Lasagne', price: 3},
      ],
    },
    {
      useBy: 12222222,
      items: [
        {id: 5, name: 'Aaaaaa', price: 12.20},
        {id: 6, name: 'Bbbbbb', price: 2.50},
        {id: 7, name: 'Ccccc', price: 1},
        {id: 8, name: 'Ddddddd', price: 6},
        {id: 9, name: 'Eeeeee', price: 1},
        {id: 10, name: 'Other', price: 2},
      ]
    },
  ]);


  return {
    selectedCategory,
    onSelectCategory,
    categories,
    products
  };
};

export default useHomeScreenViewModel;
