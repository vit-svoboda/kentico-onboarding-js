import {ITEM_REVERT} from './actionTypes';
import {ID} from '../descriptors/itemProperties';

const revertItem = (itemToRevert) => ({
  type: ITEM_REVERT,
  payload: {
    id: itemToRevert.get(ID)
  }
});

export default revertItem;
