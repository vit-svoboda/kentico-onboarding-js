import {ITEM_UPDATE} from './actionTypes';
import {ID} from '../descriptors/itemProperties';

const updateItem = (itemToUpdate, newText) => ({
  type: ITEM_UPDATE,
  payload: {
    id: itemToUpdate.get(ID),
    newText
  }
});

export default updateItem;
