import React from 'react';
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
                {this.state.items.map(itemToDisplay => <ListItemContainer item={itemToDisplay}
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
    let itemOrder = 1;
    const preservedItems = this
      .state
      .items
      .filter(currentItem => currentItem.id !== itemToDelete.id)
      .map(currentItem => ({ text: currentItem.text, order: itemOrder++, id: currentItem.id }));

    this.setState({ items: preservedItems });
  }

  addItem(itemText) {
    const allItems = this.state.items;

    allItems.push({
      text: itemText,
      order: allItems.length + 1,
      id: this.createGuid()
    });

    this.setState({items: allItems });
  }

  createGuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
}

export default List;
