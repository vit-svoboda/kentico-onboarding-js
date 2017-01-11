import itemProperties from '../../src/descriptors/itemProperties';

const checkItem = (itemToCheck, text, id, isCheckedOut, originalText) => {
  expect(itemToCheck.get(itemProperties.ID)).toBe(id);
  expect(itemToCheck.get(itemProperties.TEXT)).toBe(text);
  expect(itemToCheck.get(itemProperties.IS_CHECKED_OUT)).toBe(isCheckedOut);
  expect(itemToCheck.get(itemProperties.ORIGINAL_TEXT)).toBe(originalText);
};

export default checkItem;
