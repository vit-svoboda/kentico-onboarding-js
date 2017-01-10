import Immutable from 'immutable';
import actionTypes from '../actions/actionTypes';
import insertFormProperties from '../descriptors/insertFormProperties';

const insertFormActionsReducer = (previousStoreState = Immutable.Map({[insertFormProperties.TEXT]: ''}), action) => {
  switch (action.type) {
    case actionTypes.NEWITEM_UPDATE: {
      return Immutable.Map({
        [insertFormProperties.TEXT]: action.payload.newText
      });
    }
    default: {
      return previousStoreState;
    }
  }
};

export default insertFormActionsReducer;
