import actionTypes from './actionTypes';
import itemProperties from '../descriptors/itemProperties';

const revertItem = (itemToRevert) => ({
  type: actionTypes.ITEM_REVERT,
  payload: {
    id: itemToRevert.get(itemProperties.ID)
  }
});

export default revertItem;
