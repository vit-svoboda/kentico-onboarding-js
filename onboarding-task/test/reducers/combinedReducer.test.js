import combinedReducer from '../../src/reducers/combinedReducer';
import insertFormProperties from '../../src/descriptors/insertFormProperties';

describe('Basic test suite for combinedReducer', () => {
  it('Has default state', () => {
    const action = {
      type: 'UNKNOWN_ACTION_TYPE'
    };
    const state = combinedReducer(undefined, action);

    expect(state.items.size).toBe(0);
    expect(state.insertForm.get(insertFormProperties.TEXT)).toBe('');
  });
});
