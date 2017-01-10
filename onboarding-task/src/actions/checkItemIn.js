import actionTypes from './actionTypes';
import {ID} from '../descriptors/itemProperties';

const checkItemIn = (itemToCheckIn) => ({
  type: actionTypes.ITEM_CHECKIN,
  payload: {
    id: itemToCheckIn.get(ID)
  }
});

export default checkItemIn;
