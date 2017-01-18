import itemGenerator from '../testUtils/itemGenerator';
import initialStateGenerator from '../testUtils/initialStateGenerator';
import checkThatItem from '../testUtils/itemChecker';
import properties from '../../src/descriptors/itemProperties';
import actionTypes from '../../src/actions/actionTypes';
import insertItem from '../../src/actions/insertItem';
import deleteItem from '../../src/actions/deleteItem';
import checkItemOut from '../../src/actions/checkItemOut';
import revertItem from '../../src/actions/revertItem';
import checkItemIn from '../../src/actions/checkItemIn';
import updateItem from '../../src/actions/updateItem';
import itemActionsReducer from '../../src/reducers/itemActionsReducer';

describe('Basic test suite for itemActionsReducer', () => {
  it('Has default state', () => {
    const action = {
      type: 'UNKNOWN_ACTION_TYPE',
      payload: {
        id: 23
      }
    };
    const state = itemActionsReducer(undefined, action);

    expect(state.size).toBe(0);
  });
});

describe('Test suite for handler of ITEM_INSERT action in itemActionsReducer', () => {
  it('Does not modify store when item is not provided', () => {
    const previousState = initialStateGenerator.createInitialState();

    const action = {
      type: actionTypes.ITEM_INSERT,
      payload: {}
    };
    const state = itemActionsReducer(previousState, action);

    expect(state.size).toBe(1);
    initialStateGenerator.checkInitialItems(state);
  });

  it('Inserts new item and does not modify others', () => {
    const previousState = initialStateGenerator.createInitialState();
    const action = insertItem('item text');
    const itemId = action.payload.item.get(properties.ID);
    const state = itemActionsReducer(previousState, action);

    const insertedItem = state.get(itemId);
    expect(state.size).toBe(2);
    initialStateGenerator.checkInitialItems(state);
    checkThatItem(insertedItem)
      .idIs(itemId)
      .andTextIs('item text')
      .andOriginalTextIs('item text')
      .andIsNotCheckedOut();
  });
});

describe('Test suite for handler of ITEM_DELETE action in itemActionsReducer', () => {
  it('Does not delete checked-in item or any other', () => {
    const itemId = '23';
    const itemToDelete = itemGenerator('item to delete', itemId, false);
    const initialState = initialStateGenerator.createInitialState()
      .set(itemId, itemToDelete);

    const action = deleteItem(itemToDelete);
    const state = itemActionsReducer(initialState, action);

    const preservedItem = state.get(itemId);
    expect(state.size).toBe(2);
    initialStateGenerator.checkInitialItems(state);
    checkThatItem(preservedItem)
      .idIs(itemId)
      .andTextIs('item to delete')
      .andOriginalTextIs('item to delete')
      .andIsNotCheckedOut();
  });

  it('Does not delete anything for non-existent item', () => {
    const itemId = '666';
    const itemToDelete = itemGenerator('non-existent item', itemId, true, 'dummy');
    const initialState = initialStateGenerator.createInitialState();

    const action = deleteItem(itemToDelete);
    const state = itemActionsReducer(initialState, action);

    expect(state.size).toBe(1);
    initialStateGenerator.checkInitialItems(state);
  });

  it('Deletes checked-out item and does not modify others', () => {
    const itemId = '42';
    const itemToDelete = itemGenerator('item to delete', itemId, true, 'changes in item text');
    const initialState = initialStateGenerator.createInitialState()
      .set(itemId, itemToDelete);

    const action = deleteItem(itemToDelete);
    const state = itemActionsReducer(initialState, action);

    expect(state.size).toBe(1);
    initialStateGenerator.checkInitialItems(state);
  });
});

describe('Test suite for handler of ITEM_CHECKOUT action in itemActionsReducer', () => {
  it('Does not modify item that is already checked-out or any other', () => {
    const itemId = '23';
    const itemToCheckOut = itemGenerator('item to check-out', itemId, true, 'original text');
    const initialState = initialStateGenerator.createInitialState()
      .set(itemId, itemToCheckOut);

    const action = checkItemOut(itemToCheckOut);
    const state = itemActionsReducer(initialState, action);

    const checkedOutItem = state.get(itemId);
    expect(state.size).toBe(2);
    initialStateGenerator.checkInitialItems(state);

    checkThatItem(checkedOutItem)
      .idIs(itemId)
      .andTextIs('item to check-out')
      .andOriginalTextIs('original text')
      .andIsCheckedOut();
  });

  it('Does not modify anything when item does not exist', () => {
    const itemId = '666';
    const itemToCheckOut = itemGenerator('non-existent item', itemId, true, 'dummy');
    const initialState = initialStateGenerator.createInitialState();

    const action = checkItemOut(itemToCheckOut);
    const state = itemActionsReducer(initialState, action);

    expect(state.size).toBe(1);
    initialStateGenerator.checkInitialItems(state);
  });

  it('Checks checked-in item out and does not modify others', () => {
    const itemId = '42';
    const itemToCheckOut = itemGenerator('item to check-out', itemId, false, 'item to check-out');
    const initialState = initialStateGenerator.createInitialState()
      .set(itemId, itemToCheckOut);

    const action = checkItemOut(itemToCheckOut);
    const state = itemActionsReducer(initialState, action);

    const checkedOutItem = state.get(itemId);
    expect(state.size).toBe(2);
    initialStateGenerator.checkInitialItems(state);
    checkThatItem(checkedOutItem)
      .idIs(itemId)
      .andTextIs('item to check-out')
      .andOriginalTextIs('item to check-out')
      .andIsCheckedOut();
  });
});

describe('Test suite for handler of ITEM_REVERT action in itemActionsReducer', () => {
  it('Does not modify item that is checked-in or any other', () => {
    const itemId = '23';
    const itemToRevert = itemGenerator('inconsistent state only for testing purposes', itemId, false, 'item to revert');
    const initialState = initialStateGenerator.createInitialState()
      .set(itemId, itemToRevert);

    const action = revertItem(itemToRevert);
    const state = itemActionsReducer(initialState, action);

    const revertedItem = state.get(itemId);
    expect(state.size).toBe(2);
    initialStateGenerator.checkInitialItems(state);
    checkThatItem(revertedItem)
      .idIs(itemId)
      .andTextIs('inconsistent state only for testing purposes')
      .andOriginalTextIs('item to revert')
      .andIsNotCheckedOut();
  });

  it('Does not modify anything when item does not exist', () => {
    const itemId = '666';
    const itemToRevert = itemGenerator('item to revert', itemId, true, 'dummy');
    const initialState = initialStateGenerator.createInitialState();

    const action = revertItem(itemToRevert);
    const state = itemActionsReducer(initialState, action);

    expect(state.size).toBe(1);
    initialStateGenerator.checkInitialItems(state);
  });

  it('Reverts checked-out item and does not modify others', () => {
    const itemId = '42';
    const itemToRevert = itemGenerator('edited item to revert', itemId, true, 'item to revert');
    const initialState = initialStateGenerator.createInitialState()
      .set(itemId, itemToRevert);

    const action = revertItem(itemToRevert);
    const state = itemActionsReducer(initialState, action);

    const revertedItem = state.get(itemId);
    expect(state.size).toBe(2);
    initialStateGenerator.checkInitialItems(state);
    checkThatItem(revertedItem)
      .idIs(itemId)
      .andTextIs('item to revert')
      .andOriginalTextIs('item to revert')
      .andIsNotCheckedOut();
  });
});


describe('Test suite for handler of ITEM_CHECKIN action in itemActionsReducer', () => {
  it('Does not modify item that is already checked-in or any other', () => {
    const itemId = '23';
    const itemToCheckIn = itemGenerator('item to check-in', itemId, false, 'inconsistent state only for testing purposes');
    const initialState = initialStateGenerator.createInitialState()
      .set(itemId, itemToCheckIn);

    const action = checkItemIn(itemToCheckIn);
    const state = itemActionsReducer(initialState, action);

    const checkedInItem = state.get(itemId);
    expect(state.size).toBe(2);
    initialStateGenerator.checkInitialItems(state);
    checkThatItem(checkedInItem)
      .idIs(itemId)
      .andTextIs('item to check-in')
      .andOriginalTextIs('inconsistent state only for testing purposes')
      .andIsNotCheckedOut();
  });

  it('Does not modify anything when item does not exist', () => {
    const itemId = '666';
    const itemToCheckIn = itemGenerator('item to check-in', itemId, true, 'dummy');
    const initialState = initialStateGenerator.createInitialState();

    const action = checkItemIn(itemToCheckIn);
    const state = itemActionsReducer(initialState, action);

    expect(state.size).toBe(1);
    initialStateGenerator.checkInitialItems(state);
  });

  it('Checks checked-out item in and does not modify others', () => {
    const itemId = '42';
    const itemToCheckIn = itemGenerator('edited item to check-in', itemId, true, 'item to check-in');
    const initialState = initialStateGenerator.createInitialState()
      .set(itemId, itemToCheckIn);

    const action = checkItemIn(itemToCheckIn);
    const state = itemActionsReducer(initialState, action);

    const checkedInItem = state.get(itemId);
    expect(state.size).toBe(2);
    initialStateGenerator.checkInitialItems(state);
    checkThatItem(checkedInItem)
      .idIs(itemId)
      .andTextIs('edited item to check-in')
      .andOriginalTextIs('edited item to check-in')
      .andIsNotCheckedOut();
  });
});

describe('Test suite for handler of ITEM_UPDATE action in itemActionsReducer', () => {
  it('Does not modify item that is checked-in or any other', () => {

    // Do not write errors to console
    spyOn(console, 'error');

    const itemId = '23';
    const itemToUpdate = itemGenerator('item to update', itemId, false);
    const initialState = initialStateGenerator.createInitialState()
      .set(itemId, itemToUpdate);

    const action = updateItem(itemToUpdate, 'updated text');
    const state = itemActionsReducer(initialState, action);

    const updatedItem = state.get(itemId);
    expect(state.size).toBe(2);
    initialStateGenerator.checkInitialItems(state);
    checkThatItem(updatedItem)
      .idIs(itemId)
      .andTextIs('item to update')
      .andOriginalTextIs('item to update')
      .andIsNotCheckedOut();
  });

  it('Does not modify anything when item does not exist', () => {
    const itemId = '666';
    const itemToUpdate = itemGenerator('updated version #1', itemId, true, 'item to update');
    const initialState = initialStateGenerator.createInitialState();

    const action = updateItem(itemToUpdate, 'updated version #2');
    const state = itemActionsReducer(initialState, action);

    expect(state.size).toBe(1);
    initialStateGenerator.checkInitialItems(state);
  });

  it('Updates checked-out item and does not modify others', () => {
    const itemId = '42';
    const itemToUpdate = itemGenerator('updated version #1', itemId, true, 'item to update');
    const initialState = initialStateGenerator.createInitialState()
      .set(itemId, itemToUpdate);

    const action = updateItem(itemToUpdate, 'updated version #2');
    const state = itemActionsReducer(initialState, action);

    const updatedItem = state.get(itemId);
    expect(state.size).toBe(2);
    initialStateGenerator.checkInitialItems(state);
    checkThatItem(updatedItem)
      .idIs(itemId)
      .andTextIs('updated version #2')
      .andOriginalTextIs('item to update')
      .andIsCheckedOut();
  });
});
