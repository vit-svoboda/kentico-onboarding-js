import React from 'react';
import Immutable from 'immutable';
import {createGuid} from '../utils/guidGenerator';
import ListItemContainer from './ListItemContainer';
import NewItem from './NewItem';

class List extends React.Component {
  constructor(props) {
    super(props);

    this._updateState(Immutable.Map());
  }

  _getItemUpdater(itemToUpdate) {
    return (newText) => {
      const updatedItems = this
        .state
        .items
        .update(itemToUpdate.get('id'), item => item.set('text', newText));

      this._updateState(updatedItems);
    }
  }

  _deleteItem(itemToDelete) {
    // Function delete() cannot be used since it reorders preserved items
    const preservedItems = this
      .state
      .items
      .filterNot((_, key) => key === itemToDelete.get('id'))
      .toMap();

    this._updateState(preservedItems);
  }

  _insertItem(itemText) {
    const newItem = Immutable.Map({
      text: itemText,
      id: createGuid()
    });

    const allItems = this
      .state
      .items
      .set(newItem.get('id'), newItem);

    this._updateState(allItems);
  }

  _updateState(items) {
    const state = {items: items};

    if (typeof this.state === 'undefined') {
      this.state = state;
    }
    else {
      this.setState(state);
    }
  }

  render() {
    const items = this
      .state
      .items
      .valueSeq()
      .map((itemToDisplay, index) => <ListItemContainer item={itemToDisplay}
                                                        itemOrder={index + 1}
                                                        onDelete={() => this._deleteItem(itemToDisplay)}
                                                        onUpdate={this._getItemUpdater(itemToDisplay)}
                                                        key={itemToDisplay.get('id')}/>);

    return (
      <div className="row">
        <div className="row">
          <div className="col-sm-12 col-md-offset-2 col-md-8">
            <table className="table table-bordered">
              <tbody>
                {items}

                <tr>
                  <td>
                    <NewItem onInsert={(itemText) => this._insertItem(itemText)}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
