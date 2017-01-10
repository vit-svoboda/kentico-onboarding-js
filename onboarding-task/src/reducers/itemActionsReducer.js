import Immutable from 'immutable';
import actionTypes from '../actions/actionTypes';
import createGuid from '../utils/guidGenerator';
import {ID, TEXT, IS_CHECKED_OUT, ORIGINAL_TEXT} from '../descriptors/itemProperties';

const insertItem = (state, itemText) => {
  const newItem = Immutable.Map({
    [TEXT]: itemText,
    [ID]: createGuid(),
    [IS_CHECKED_OUT]: false,
    [ORIGINAL_TEXT]: itemText
  });

  const allItems = state
    .set(newItem.get(ID), newItem);

  return allItems;
};

const deleteItem = (state, itemId) => {
  // Function delete() cannot be used since it reorders preserved items
  const preservedItems = state
    .filterNot((_, key) => key === itemId)
    .toMap();

  return preservedItems;
};

const checkoutItem = (state, itemId) => {
  const itemToCheckout = state.get(itemId);
  if (itemToCheckout.get(IS_CHECKED_OUT)) {
    return state;
  }

  const updatedItems = state
    .update(itemId, item => item
      .set(IS_CHECKED_OUT, true)
      .set(ORIGINAL_TEXT, item.get(TEXT)));

  return updatedItems;
};

const revertItem = (state, itemId) => {
  const itemToRevert = state.get(itemId);
  if (!itemToRevert.get(IS_CHECKED_OUT)) {
    return state;
  }

  const updatedItems = state
    .update(itemId, item => item
      .set(IS_CHECKED_OUT, false)
      .set(TEXT, item.get(ORIGINAL_TEXT)));

  return updatedItems;
};

const checkinItem = (state, itemId) => {
  const itemToCheckin = state.get(itemId);
  if (!itemToCheckin.get(IS_CHECKED_OUT)) {
    return state;
  }

  const updatedItems = state
    .update(itemId, item => item
      .set(IS_CHECKED_OUT, false)
      .set(ORIGINAL_TEXT, item.get(TEXT)));

  return updatedItems;
};

const updateItem = (state, itemId, newText) => {
  const itemToUpdate = state.get(itemId);
  if (!itemToUpdate.get(IS_CHECKED_OUT)) {
    throw new Error('Cannot update checked in item.');
  }

  const updatedItems = state
    .update(itemId, item => item.set(TEXT, newText));

  return updatedItems;
};

const itemActionsReducer = (previousStoreState = Immutable.Map(), action) => {
  switch (action.type) {
    case actionTypes.ITEM_INSERT: {
      return insertItem(previousStoreState, action.payload.text);
    }
    case actionTypes.ITEM_CHECKOUT: {
      return checkoutItem(previousStoreState, action.payload.id);
    }
    case actionTypes.ITEM_REVERT: {
      return revertItem(previousStoreState, action.payload.id);
    }
    case actionTypes.ITEM_CHECKIN: {
      return checkinItem(previousStoreState, action.payload.id);
    }
    case actionTypes.ITEM_UPDATE: {
      return updateItem(previousStoreState, action.payload.id, action.payload.newText);
    }
    case actionTypes.ITEM_DELETE: {
      return deleteItem(previousStoreState, action.payload.id);
    }
    default: {
      return previousStoreState;
    }
  }
};

export default itemActionsReducer;
