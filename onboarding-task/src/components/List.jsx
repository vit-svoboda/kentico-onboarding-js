import React from 'react';
import {createGuid} from '../utils/guidGenerator'
import ListItemContainer from './ListItemContainer';
import NewItem from './NewItem'

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {items: []};
  }

  _getItemUpdater(itemToUpdate) {
    return (newText) => {
      const updatedItems = this.state.items.map(currentItem => {
        if (currentItem.id === itemToUpdate.id) {
          currentItem.text = newText;
        }

        return currentItem;
      });

      this.setState({items: updatedItems});
    }
  }

  _deleteItem(itemToDelete) {
    const preservedItems = this
      .state
      .items
      .filter(currentItem => currentItem.id !== itemToDelete.id);

    this.setState({items: preservedItems});
  }

  _insertItem(itemText) {
    const allItems = this.state.items;

    allItems.push({
      text: itemText,
      id: createGuid()
    });

    this.setState({items: allItems});
  }

  render() {
    const items = this
      .state
      .items
      .map((itemToDisplay, index) => <ListItemContainer text={itemToDisplay.text}
                                                        itemOrder={index + 1}
                                                        onDelete={() => this._deleteItem(itemToDisplay)}
                                                        onUpdate={this._getItemUpdater(itemToDisplay)}
                                                        key={itemToDisplay.id}/>);

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
