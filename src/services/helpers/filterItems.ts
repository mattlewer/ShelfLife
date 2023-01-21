import {Category} from '../../interfaces/Category';
import {ProductResponse} from '../../interfaces/Product';

export const filterItemsCategory = (
  items: ProductResponse[],
  category: Category,
): ProductResponse[] => {
  return items
    .map(element => {
      return {
        ...element,
        items: element.items.filter(
          subElement => subElement.categoryId === category.id,
        ),
      };
    })
    .filter(elem => elem.items.length > 0);
};
