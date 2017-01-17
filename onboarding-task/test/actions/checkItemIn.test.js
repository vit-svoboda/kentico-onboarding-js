import itemGenerator from '../testUtils/itemGenerator';
import checkItemIn from '../../src/actions/checkItemIn';
import actionTypes from '../../src/actions/actionTypes';

describe('Test suite for checkItemIn action creator', () => {
  it('Generates action for check-in', () => {
    const item = itemGenerator('test1', '42');
    const action = checkItemIn(item);

    expect(action.type).toBe(actionTypes.ITEM_CHECKIN);
    expect(action.payload.id).toBe('42');
  });
});
