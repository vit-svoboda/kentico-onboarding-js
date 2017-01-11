import itemGenerator from '../testUtils/itemGenerator';
import revertItem from '../../src/actions/revertItem';
import actionTypes from '../../src/actions/actionTypes';

it('Generates action for revert', () => {
  const item = itemGenerator('test1', 'ef-dc-b32');
  const action = revertItem(item);

  expect(action.type).toBe(actionTypes.ITEM_REVERT);
  expect(action.payload.id).toBe('ef-dc-b32');
});
