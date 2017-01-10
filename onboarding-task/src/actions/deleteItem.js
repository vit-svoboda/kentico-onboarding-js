import actionTypes from './actionTypes';
import itemProperties from '../descriptors/itemProperties';

const deleteItem = (itemToDelete) => ({
  type: actionTypes.ITEM_DELETE,
  payload: {
    id: itemToDelete.get(itemProperties.ID)
  }
});

export default deleteItem;
