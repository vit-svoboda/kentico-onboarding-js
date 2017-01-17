import actionTypes from './actionTypes';
import itemProperties from '../descriptors/itemProperties';

const updateItem = (itemToUpdate, newText) => {
  if (!itemToUpdate.get(itemProperties.IS_CHECKED_OUT)) {
    console.error('Cannot update checked in item.');
  }

  return ({
    type: actionTypes.ITEM_UPDATE,
    payload: {
      id: itemToUpdate.get(itemProperties.ID),
      newText
    }
  });
};

export default updateItem;
