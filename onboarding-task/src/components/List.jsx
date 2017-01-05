import React from 'react';
import { createGuid } from '../utils/guidGenerator'
import ListItemContainer from './ListItemContainer';
import NewItem from './NewItem'

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: []};
  }

  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="col-sm-12 col-md-offset-2 col-md-8">
            <table className="table table-bordered">
              <tbody>
                {this.state.items.map((itemToDisplay, index) => <ListItemContainer item={itemToDisplay}
                                                                                   itemOrder={index + 1}
                                                                                   deleteHandler={this.deleteItem.bind(this)}
                                                                                   updateHandler={this.updateItem.bind(this)}
                                                                                   key={itemToDisplay.id} /> )}
                <tr>
                  <td>
                    <NewItem addItemHandler={this.addItem.bind(this)} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  updateItem(itemToUpdate, newText) {
    const updatedItems = this.state.items.map(currentItem => {
      if(currentItem.id === itemToUpdate.id) {
        currentItem.text = newText;
      }

      return currentItem;
    });

    this.setState({ items: updatedItems });
  }

  deleteItem(itemToDelete) {
    const preservedItems = this
      .state
      .items
      .filter(currentItem => currentItem.id !== itemToDelete.id);

    this.setState({ items: preservedItems });
  }

  addItem(itemText) {
    const allItems = this.state.items;

    allItems.push({
      text: itemText,
      id: createGuid()
    });

    this.setState({items: allItems });
  }
}

export default List;
