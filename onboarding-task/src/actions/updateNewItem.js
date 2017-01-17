import actionTypes from './actionTypes';

const updateNewItem = (newText) => ({
  type: actionTypes.NEWITEM_UPDATE,
  payload: {
    newText
  }
});

export default updateNewItem;
