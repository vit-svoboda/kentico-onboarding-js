import itemGenerator from '../testUtils/itemGenerator';
import deleteItem from '../../src/actions/deleteItem';
import actionTypes from '../../src/actions/actionTypes';

describe('Test suite for deleteItem action creator', () => {
  it('Generates action for delete', () => {
    const item = itemGenerator('test1', 'f23-42-666');
    const action = deleteItem(item);

    expect(action.type).toBe(actionTypes.ITEM_DELETE);
    expect(action.payload.id).toBe('f23-42-666');
  });
});
