import actionTypes from './actionTypes';

const insertItem = text => ({
  type: actionTypes.ITEM_INSERT,
  payload: {
    text
  }
});

export default insertItem;
