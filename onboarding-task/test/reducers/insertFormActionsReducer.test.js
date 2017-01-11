import Immutable from 'Immutable';
import updateNewItem from '../../src/actions/updateNewItem';
import insertFormActionsReducer from '../../src/reducers/insertFormActionsReducer';
import properties from '../../src/descriptors/insertFormProperties';

describe('Test suite for insertFormActionsReducer', () => {
  it('Has default state', () => {
    const action = {
      type: 'UNKNOWN_ACTION'
    };
    const state = insertFormActionsReducer(undefined, action);

    expect(state.get(properties.TEXT)).toBe('');
  });

  it('Updates item text', () => {
    const originalState = Immutable.Map({
      text: 'pasted text'
    });

    const action = updateNewItem('updated text');
    const state = insertFormActionsReducer(originalState, action);

    expect(originalState.get(properties.TEXT)).toBe('pasted text');
    expect(state.get(properties.TEXT)).toBe('updated text');
  });
});
