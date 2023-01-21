import {atom} from 'recoil';
import { ProductResponse } from '../interfaces/Product';

export const productState = atom<ProductResponse[] | undefined>({
  key: 'product',
  default: undefined,
});
