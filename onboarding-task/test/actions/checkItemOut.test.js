import itemGenerator from '../testUtils/itemGenerator';
import checkItemOut from '../../src/actions/checkItemOut';
import actionTypes from '../../src/actions/actionTypes';

it('Generates action for check-out', () => {
  const item = itemGenerator('test1', '23');
  const action = checkItemOut(item);

  expect(action.type).toBe(actionTypes.ITEM_CHECKOUT);
  expect(action.payload.id).toBe('23');
});
