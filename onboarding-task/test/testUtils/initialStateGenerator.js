import Immutable from 'Immutable';
import itemGenerator from './itemGenerator';
import checkThatItem from './itemChecker';

const defaultItemId = '00-00';
const defaultItemText = 'default item';

const createInitialState = () => {
  const item = itemGenerator(defaultItemText, defaultItemId);
  return Immutable.Map({[defaultItemId]: item});
};

const checkInitialItems = stateToCheck => {
  const item = stateToCheck.get(defaultItemId);

  checkThatItem(item)
    .idIs(defaultItemId)
    .andTextIs(defaultItemText)
    .andOriginalTextIs(defaultItemText)
    .andIsNotCheckedOut();
};

export default {
  createInitialState,
  checkInitialItems
};
