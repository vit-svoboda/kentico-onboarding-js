import Immutable from 'Immutable';
import itemProperties from '../../src/descriptors/itemProperties';

const itemGenerator = (text, id, isCheckedOut = false, originalText = text) => Immutable.Map({
  [itemProperties.TEXT]: text,
  [itemProperties.ID]: id,
  [itemProperties.IS_CHECKED_OUT]: isCheckedOut,
  [itemProperties.ORIGINAL_TEXT]: originalText
});

export default itemGenerator;
