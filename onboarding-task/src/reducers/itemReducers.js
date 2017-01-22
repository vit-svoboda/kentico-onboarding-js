import uuid from 'uuid';

import initialState from '../store/initialState.js';
import * as actionTypes from '../actions/actionTypes.js';

export default function itemReducer(items = initialState, action) {
  switch (action.type) {
    case actionTypes.ITEM_CREATED:
      return items.set(uuid(), action.value);

    case actionTypes.ITEM_DELETED:
      return items.delete(action.key);

    case actionTypes.ITEM_UPDATED:
      return items.set(action.key, action.value);

    default:
      return items;
  }
}
