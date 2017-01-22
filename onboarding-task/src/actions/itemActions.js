import * as types from './actionTypes.js';

export function itemCreated(value) {
  return {
    type: types.ITEM_CREATED,
    value,
  };
}

export function itemDeleted(key) {
  return {
    type: types.ITEM_DELETED,
    key,
  };
}

export function itemUpdated(key, value) {
  return {
    type: types.ITEM_UPDATED,
    key,
    value,
  };
}
