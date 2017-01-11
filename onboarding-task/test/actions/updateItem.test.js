import itemGenerator from '../testUtils/itemGenerator';
import updateItem from '../../src/actions/updateItem';
import actionTypes from '../../src/actions/actionTypes';

it('Generates action for update of checked in item and logs error to console', () => {
  spyOn(console, 'error');

  const item = itemGenerator('test1', '666', false);
  const action = updateItem(item, 'updated test1');

  expect(console.error).toHaveBeenCalled();
  expect(action.type).toBe(actionTypes.ITEM_UPDATE);
  expect(action.payload.id).toBe('666');
  expect(action.payload.newText).toBe('updated test1');
});

it('Generates action for update of checked out item', () => {
  spyOn(console, 'error');

  const item = itemGenerator('test2', 'ff', true);
  const action = updateItem(item, 'updated test2');

  expect(console.error).not.toHaveBeenCalled();
  expect(action.type).toBe(actionTypes.ITEM_UPDATE);
  expect(action.payload.id).toBe('ff');
  expect(action.payload.newText).toBe('updated test2');
});
