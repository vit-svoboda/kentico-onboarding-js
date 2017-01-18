import itemProperties from '../../src/descriptors/itemProperties';

const continueWithCheckOut = item => {
  return {
    andIsCheckedOut: () => expect(item.get(itemProperties.IS_CHECKED_OUT)).toBe(true),
    andIsNotCheckedOut: () => expect(item.get(itemProperties.IS_CHECKED_OUT)).toBe(false)
  };
};

const continueWithOriginalText = item => {
  return {
    andOriginalTextIs: text => {
      expect(item.get(itemProperties.ORIGINAL_TEXT)).toBe(text);
      return continueWithCheckOut(item);
    }
  };
};

const continueWithText = item => {
  return {
    andTextIs: text => {
      expect(item.get(itemProperties.TEXT)).toBe(text);
      return continueWithOriginalText(item);
    }
  };
};

const continueWithId = item => {
  return {
    idIs: id => {
      expect(item.get(itemProperties.ID)).toBe(id);
      return continueWithText(item);
    }
  };
};

const checkThatItem = item => continueWithId(item);

export default checkThatItem;
