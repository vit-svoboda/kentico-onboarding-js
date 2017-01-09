import {ITEM_CHECKOUT} from './actionTypes';
import {ID} from '../descriptors/itemProperties';

const checkItemOut = (itemToCheckOut) => ({
  type: ITEM_CHECKOUT,
  payload: {
    id: itemToCheckOut.get(ID)
  }
});

export default checkItemOut;
