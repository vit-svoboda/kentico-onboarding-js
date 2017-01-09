import Immutable from 'immutable';
import {NEWITEM_UPDATE} from '../actions/actionTypes';
import {TEXT} from '../descriptors/insertFormProperties';

const insertFormActionsReducer = (previousStoreState = Immutable.Map({[TEXT]: ''}), action) => {
  switch (action.type) {
    case NEWITEM_UPDATE: {
      return Immutable.Map({
        [TEXT]: action.payload.newText
      });
    }
    default: {
      return previousStoreState;
    }
  }
};

export default insertFormActionsReducer;
