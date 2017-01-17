import Immutable from 'immutable';
import createGuid from '../utils/guidGenerator';
import actionTypes from './actionTypes';
import itemProperties from '../descriptors/itemProperties';

const insertItem = text => {
  const item = Immutable.Map({
    [itemProperties.TEXT]: text,
    [itemProperties.ID]: createGuid(),
    [itemProperties.IS_CHECKED_OUT]: false,
    [itemProperties.ORIGINAL_TEXT]: text
  });

  return {
    type: actionTypes.ITEM_INSERT,
    payload: {
      item
    }
  }
};

export default insertItem;
