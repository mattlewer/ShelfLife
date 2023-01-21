import { Category } from "../interfaces/Category";
import Meat from '../assets/meat.png';
import Veg from '../assets/veg.png';
import Fruit from '../assets/fruit.png';
import Dairy from '../assets/dairy.png';
import Juice from '../assets/juice.png';
import Baked from '../assets/baked.png';
import Snacks from '../assets/snacks.png';
import * as Colors from './colors';

export const Categories: Category[] = [
    {id: 1, name: 'meat', uri: Meat, color: Colors.Meat},
    {id: 2, name: 'veg', uri: Veg, color: Colors.Veg},
    {id: 3, name: 'fruit', uri: Fruit, color: Colors.Fruit},
    {id: 4, name: 'dairy', uri: Dairy, color: Colors.Dairy},
    {id: 5, name: 'juice', uri: Juice, color: Colors.Juice},
    {id: 6, name: 'baked', uri: Baked, color: Colors.Baked},
    {id: 7, name: 'snacks', uri: Snacks, color: Colors.Snacks},
  ];