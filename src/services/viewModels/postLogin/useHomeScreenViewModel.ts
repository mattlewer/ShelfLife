import {useState} from 'react';
import { ProductResponse } from '../../../interfaces/Product';

const useHomeScreenViewModel = () => {

  const [products, setProducts] = useState<ProductResponse[]>([
    {
      useBy: 1673905293,
      items: [
        {id: 1, name: 'Apples', price: 2.50, category: 'fruit'},
      ],
    },
    {
      useBy: 1673998093,
      items: [
        {id: 5, name: 'Aaaaaa', price: 12.20, category: 'veg'},
        {id: 6, name: 'Bbbbbb', price: 2.50, category: 'meat'},
        {id: 7, name: 'Ccccc', price: 1, category: 'juice'},
        {id: 8, name: 'Ddddddd', price: 6, category: 'dairy'},
        {id: 9, name: 'Eeeeee', price: 1, category: 'snacks'},
        {id: 10, name: 'Other', price: 2, category: 'baked'},
      ]
    },
  ]);

  const currentItems = 23;
  const discardedItems = 12;
  const moneyWasted =  23.20


  return {
    products,

    currentItems,
    discardedItems,
    moneyWasted
  };
};

export default useHomeScreenViewModel;
