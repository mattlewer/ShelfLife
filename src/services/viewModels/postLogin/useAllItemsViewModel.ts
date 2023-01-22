import {useState} from 'react';
import {Category} from '../../../interfaces/Category';
import {useRecoilValue} from 'recoil';
import {productState} from '../../../state/products';
import {Product} from '../../../interfaces/Product';
import useDatabase from '../../hooks/useDatabase';

const useAllItemsViewModel = () => {
  const database = useDatabase();
  const data = useRecoilValue(productState);

  const onAddProduct = () => {
    database.storeProduct({
      id: Math.floor(Math.random() * 100) + 1,
      name: 'Apples',
      price: Math.floor(Math.random() * 100) + 1,
      categoryId: 3,
      useBy: 1674404188,
    });
  };

  const onRemoveProduct = (product: Product) => {
    const timer = setTimeout(() => {
      database.deleteProduct(product);
    }, 500);
    return () => clearTimeout(timer);
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
    onRemoveProduct,
    data,
  };
};

export default useAllItemsViewModel;
