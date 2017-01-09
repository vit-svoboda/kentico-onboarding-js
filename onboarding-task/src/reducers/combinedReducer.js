import {combineReducers} from 'redux';
import ItemActionsReducer from './itemActionsReducer';
import InsertFormActionsReducer from './insertFormActionsReducer';

const combinedReducer = combineReducers({
  items: ItemActionsReducer,
  insertForm: InsertFormActionsReducer
});

export default combinedReducer;
