import Immutable from 'Immutable';
import itemGenerator from './itemGenerator';
import checkItem from './checkItem';

const defaultItemId = '00-00';
const defaultItemText = 'default item';

export const createInitialState = () => {
  const item = itemGenerator(defaultItemText, defaultItemId);
  return Immutable.Map({[defaultItemId]: item});
};

export const checkInitialItems = stateToCheck => {
  const item = stateToCheck.get(defaultItemId);

  checkItem(item, defaultItemText, defaultItemId, false, defaultItemText);
};
