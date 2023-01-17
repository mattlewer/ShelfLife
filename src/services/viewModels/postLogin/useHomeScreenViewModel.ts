import {useState} from 'react';

const useHomeScreenViewModel = () => {

  const [products, setProducts] = useState([
    {
      useBy: 1673905293,
      items: [
        {id: 1, name: 'Apples', price: 2.50},
        {id: 2, name: 'Apples', price: 2.50},
        {id: 3, name: 'Apples', price: 2.50},
        {id: 4, name: 'Apples', price: 2.50},
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
