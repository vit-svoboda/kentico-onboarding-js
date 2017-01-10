import actionTypes from './actionTypes';
import {ID} from '../descriptors/itemProperties';

const revertItem = (itemToRevert) => ({
  type: actionTypes.ITEM_REVERT,
  payload: {
    id: itemToRevert.get(ID)
  }
});

export default revertItem;
