import actionTypes from './actionTypes';
import {ID} from '../descriptors/itemProperties';

const checkItemOut = (itemToCheckOut) => ({
  type: actionTypes.ITEM_CHECKOUT,
  payload: {
    id: itemToCheckOut.get(ID)
  }
});

export default checkItemOut;
