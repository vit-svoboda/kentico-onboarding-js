import {ITEM_DELETE} from './actionTypes';
import {ID} from '../descriptors/itemProperties';

const deleteItem = (itemToDelete) => ({
  type: ITEM_DELETE,
  payload: {
    id: itemToDelete.get(ID)
  }
});

export default deleteItem;
