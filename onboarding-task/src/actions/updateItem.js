import actionTypes from './actionTypes';
import {ID} from '../descriptors/itemProperties';

const updateItem = (itemToUpdate, newText) => ({
  type: actionTypes.ITEM_UPDATE,
  payload: {
    id: itemToUpdate.get(ID),
    newText
  }
});

export default updateItem;
