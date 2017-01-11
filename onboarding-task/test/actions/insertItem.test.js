import insertItem from '../../src/actions/insertItem';
import actionTypes from '../../src/actions/actionTypes';
import properties from '../../src/descriptors/itemProperties';

it('Generates action for insert', () => {
  const action = insertItem('item text');

  expect(action.type).toBe(actionTypes.ITEM_INSERT);
  expect(action.payload.item.get(properties.TEXT)).toBe('item text');
  expect(action.payload.item.get(properties.ORIGINAL_TEXT)).toBe('item text');
  expect(action.payload.item.get(properties.IS_CHECKED_OUT)).toBe(false);
  expect(action.payload.item.get(properties.ID)).not.toBeNull();
});
