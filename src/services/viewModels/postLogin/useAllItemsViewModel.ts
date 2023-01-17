import {useState} from 'react';
import {Category} from '../../../interfaces/Category';

import Meat from '../../../assets/meat.png';
import Veg from '../../../assets/veg.png';
import Fruit from '../../../assets/fruit.png';
import Dairy from '../../../assets/dairy.png';
import Juice from '../../../assets/juice.png';
import Baked from '../../../assets/baked.png';
import Snacks from '../../../assets/snacks.png';

const useAllItemsViewModel = () => {

    const [selectedCategory, setSelectedCategory] = useState<undefined | Category>();

    const onSelectCategory = (category: Category) => {
      if(selectedCategory?.name === category.name){
        setSelectedCategory(undefined);
      }else{
        setSelectedCategory(category);
      }
    };

    const categories: Category[] = [
        {name: 'Meat', uri: Meat},
        {name: 'Veg', uri: Veg},
        {name: 'Fruit', uri: Fruit},
        {name: 'Dairy', uri: Dairy},
        {name: 'Juice', uri: Juice},
        {name: 'Baked', uri: Baked},
        {name: 'Snacks', uri: Snacks},
      ];
    
      const [products, setProducts] = useState([
        {
          useBy: 1673905293,
          items: [
            {id: 1, name: 'Apples', price: 2.50},
          ],
        },
        {
          useBy: 1673998093,
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
        products,
    }
}

export default useAllItemsViewModel
