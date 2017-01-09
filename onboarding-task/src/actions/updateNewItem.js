import {NEWITEM_UPDATE} from './actionTypes';

const updateNewItem = (newText) => ({
  type: NEWITEM_UPDATE,
  payload: {
    newText
  }
});

export default updateNewItem;
