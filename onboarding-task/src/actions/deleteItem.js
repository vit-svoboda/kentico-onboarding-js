import actionTypes from './actionTypes';
import {ID} from '../descriptors/itemProperties';

const deleteItem = (itemToDelete) => ({
  type: actionTypes.ITEM_DELETE,
  payload: {
    id: itemToDelete.get(ID)
  }
});

export default deleteItem;
