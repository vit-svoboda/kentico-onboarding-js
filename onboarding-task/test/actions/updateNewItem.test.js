import updateNewItem from '../../src/actions/updateNewItem';
import actionTypes from '../../src/actions/actionTypes';

it('Generates action for update of new item', () => {
  const action = updateNewItem('updated item text');

  expect(action.type).toBe(actionTypes.NEWITEM_UPDATE);
  expect(action.payload.newText).toBe('updated item text');
});
