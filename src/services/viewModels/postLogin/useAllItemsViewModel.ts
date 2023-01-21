import {useState} from 'react';
import {Category} from '../../../interfaces/Category';
import useDatabase from '../../hooks/useDatabase';
import {useRecoilValue} from 'recoil';
import {productState} from '../../../state/products';

const useAllItemsViewModel = () => {
  const database = useDatabase();
  const data = useRecoilValue(productState);

  const onAddProduct = () => {
    database.storeProduct({
      id: Math.floor(Math.random() * 100) + 1,
      name: 'Apples',
      price: 2.3,
      categoryId: 3,
      useBy: 1674310405,
    });
  };

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

  return {
    selectedCategory,
    onSelectCategory,
    onAddProduct,
    data,
  };
};

export default useAllItemsViewModel;
