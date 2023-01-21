import {useState} from 'react';
import { ProductResponse } from '../../../interfaces/Product';

const useHomeScreenViewModel = () => {

  const [products, setProducts] = useState<ProductResponse[]>([
    {
      useBy: 1673905293,
      items: [
        {id: 1, name: 'Apples', price: 2.50, categoryId: 3},
      ],
    },
    {
      useBy: 1673998093,
      items: [
        {id: 5, name: 'Aaaaaa', price: 12.20, categoryId: 2},
        {id: 6, name: 'Bbbbbb', price: 2.50, categoryId: 1},
        {id: 7, name: 'Ccccc', price: 1, categoryId: 5},
        {id: 8, name: 'Ddddddd', price: 6, categoryId: 4},
        {id: 9, name: 'Eeeeee', price: 1, categoryId: 7},
        {id: 10, name: 'Other', price: 2, categoryId: 6},
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
