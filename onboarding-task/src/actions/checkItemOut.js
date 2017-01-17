import actionTypes from './actionTypes';
import itemProperties from '../descriptors/itemProperties';

const checkItemOut = (itemToCheckOut) => ({
  type: actionTypes.ITEM_CHECKOUT,
  payload: {
    id: itemToCheckOut.get(itemProperties.ID)
  }
});

export default checkItemOut;
