import {firebase} from '@react-native-firebase/database';
import {useRecoilState, useRecoilValue} from 'recoil';
import {sessionState} from '../../state/auth';
import {Product, ProductResponse} from '../../interfaces/Product';
import {useState} from 'react';
import {productState} from '../../state/products';
import {FIREBASE_DATABASE} from '../../../hiddenVariables';

const useDatabase = () => {
  const authState = useRecoilValue(sessionState);
  const [data, setData] = useRecoilState(productState);
  const [isLoading, setIsLoading] = useState(false);
  const ITEM_PATH = '/items/' + authState?.user_id;

  const database = firebase.app().database(FIREBASE_DATABASE);

  const storeProduct = (product: Product) => {
    setIsLoading(true);
    database
      .ref(ITEM_PATH + '/' + product.useBy)
      .push()
      .set(product)
      .finally(() => setIsLoading(false));
  };

  const getProducts = () => {
    setIsLoading(true);
    database.ref(ITEM_PATH).on('value', snapshot => {
      try {
        if (snapshot.val()) {
          let arr: ProductResponse[] = [];
          for (const [key, value] of Object.entries(snapshot.val())) {
            const temp = {useBy: parseInt(key), items: []};
            for (let [key2, value2] of Object.entries(value)) {
              value2['id'] = key2
              temp['items'].push(value2);
            }
            arr.push(temp);
          }
          setData(arr);
        } else {
          setData([]);
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    });
  };

  const deleteProduct = async (product: Product) => {
    await database
      .ref(ITEM_PATH + '/' + product.useBy + '/' + product.id)
      .remove();
  };

  return {
    isLoading,
    getProducts,
    storeProduct,
    deleteProduct,
  };
};

export default useDatabase;
