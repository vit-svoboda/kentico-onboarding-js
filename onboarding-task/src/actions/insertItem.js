import {ITEM_INSERT} from './actionTypes';

const insertItem = text => ({
  type: ITEM_INSERT,
  payload: {
    text
  }
});

export default insertItem;
