import actionTypes from './actionTypes';
import itemProperties from '../descriptors/itemProperties';

const checkItemIn = (itemToCheckIn) => ({
  type: actionTypes.ITEM_CHECKIN,
  payload: {
    id: itemToCheckIn.get(itemProperties.ID)
  }
});

export default checkItemIn;
