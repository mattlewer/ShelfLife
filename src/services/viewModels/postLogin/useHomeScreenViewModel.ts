import {useEffect, useState} from 'react';
import {Product, ProductResponse} from '../../../interfaces/Product';
import {useRecoilValue} from 'recoil';
import {productState} from '../../../state/products';
import useDatabase from '../../hooks/useDatabase';
import {epochToDateString} from '../../helpers/epochToDateString';

const useHomeScreenViewModel = () => {
  const database = useDatabase();
  const data = useRecoilValue(productState);

  const [expiresToday, setExpiresToday] = useState<
    undefined | ProductResponse
  >();
  const [expiresTomorrow, setExpiresTomorrow] = useState<
    undefined | ProductResponse
  >();

  const onRemoveProduct = (product: Product) => {
    const timer = setTimeout(() => {
      database.deleteProduct(product);
    }, 500);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (data) {
      if (data[0]) {
        if (
          epochToDateString(data[0].useBy) ===
          epochToDateString(Date.now() / 1000)
        ) {
          setExpiresToday(data[0]);
        }
      } else {
        setExpiresToday(undefined);
      }
      if (data[1]) {
        if (
          epochToDateString(data[1].useBy) ===
          epochToDateString(Date.now() / 1000)
        ) {
          setExpiresTomorrow(data[1]);
        }
      } else {
        setExpiresTomorrow(undefined);
      }
    } else {
      setExpiresToday(undefined);
      setExpiresTomorrow(undefined);
    }
  }, [data]);

  const currentItems = 23;
  const discardedItems = 12;
  const moneyWasted = 23.2;

  return {
    expiresToday,
    expiresTomorrow,
    onRemoveProduct,
    currentItems,
    discardedItems,
    moneyWasted,
  };
};

export default useHomeScreenViewModel;
