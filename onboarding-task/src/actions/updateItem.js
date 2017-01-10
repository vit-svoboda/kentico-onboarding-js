import actionTypes from './actionTypes';
import itemProperties from '../descriptors/itemProperties';

const updateItem = (itemToUpdate, newText) => ({
  type: actionTypes.ITEM_UPDATE,
  payload: {
    id: itemToUpdate.get(itemProperties.ID),
    newText
  }
});

export default updateItem;
