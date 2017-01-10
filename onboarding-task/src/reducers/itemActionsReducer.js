import Immutable from 'immutable';
import actionTypes from '../actions/actionTypes';
import itemProperties from '../descriptors/itemProperties';

const insertItem = (state, item) => {
  const itemId = item.get(itemProperties.ID);

  return state
    .set(itemId, item);
};

const deleteItem = (state, itemId) => {
  // Function delete() cannot be used since it reorders preserved items
  const preservedItems = state
    .filterNot((_, key) => key === itemId)
    .toMap();

  return preservedItems;
};

const checkItemOut = itemToCheckOut => {
  if (itemToCheckOut.get(itemProperties.IS_CHECKED_OUT)) {
    return itemToCheckOut;
  }

  return itemToCheckOut
    .set(itemProperties.IS_CHECKED_OUT, true)
    .set(itemProperties.ORIGINAL_TEXT, itemToCheckOut.get(itemProperties.TEXT));
};

const revertItem = itemToRevert => {
  if (!itemToRevert.get(itemProperties.IS_CHECKED_OUT)) {
    return itemToRevert;
  }

  return itemToRevert
    .set(itemProperties.IS_CHECKED_OUT, false)
    .set(itemProperties.TEXT, itemToRevert.get(itemProperties.ORIGINAL_TEXT));
};

const checkItemIn = itemToCheckIn => {
  if (!itemToCheckIn.get(itemProperties.IS_CHECKED_OUT)) {
    return itemToCheckIn;
  }

  return itemToCheckIn
    .set(itemProperties.IS_CHECKED_OUT, false)
    .set(itemProperties.ORIGINAL_TEXT, itemToCheckIn.get(itemProperties.TEXT));
};

const updateItem = (itemToUpdate, newText) => {
  if (!itemToUpdate.get(itemProperties.IS_CHECKED_OUT)) {
    throw new Error('Cannot update checked in item.');
  }

  return itemToUpdate
    .set(itemProperties.TEXT, newText);
};

const handleSingleItemAction = (state, action) => {
  switch (action.type) {
    case actionTypes.ITEM_CHECKOUT: {
      return checkItemOut(state);
    }
    case actionTypes.ITEM_REVERT: {
      return revertItem(state);
    }
    case actionTypes.ITEM_CHECKIN: {
      return checkItemIn(state);
    }
    case actionTypes.ITEM_UPDATE:
      return updateItem(state, action.payload.newText);
    default: {
      return state;
    }
  }
};

const itemActionsReducer = (previousStoreState = Immutable.Map(), action) => {
  switch (action.type) {
    case actionTypes.ITEM_INSERT: {
      return insertItem(previousStoreState, action.payload.item);
    }
    case actionTypes.ITEM_DELETE: {
      return deleteItem(previousStoreState, action.payload.id);
    }
    case actionTypes.ITEM_CHECKOUT:
    case actionTypes.ITEM_REVERT:
    case actionTypes.ITEM_CHECKIN:
    case actionTypes.ITEM_UPDATE: {
      const item = previousStoreState.get(action.payload.id);
      const updatedItem = handleSingleItemAction(item, action);

      return previousStoreState
        .set(action.payload.id, updatedItem);
    }
    default: {
      return previousStoreState;
    }
  }
};

export default itemActionsReducer;
