import {combineReducers} from 'redux';
import itemActionsReducer from './itemActionsReducer';
import insertFormActionsReducer from './insertFormActionsReducer';

const combinedReducer = combineReducers({
  items: itemActionsReducer,
  insertForm: insertFormActionsReducer
});

export default combinedReducer;
