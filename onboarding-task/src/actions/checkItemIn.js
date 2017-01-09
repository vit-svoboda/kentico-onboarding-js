import {ITEM_CHECKIN} from './actionTypes';
import {ID} from '../descriptors/itemProperties';

const checkItemIn = (itemToCheckIn) => ({
  type: ITEM_CHECKIN,
  payload: {
    id: itemToCheckIn.get(ID)
  }
});

export default checkItemIn;
