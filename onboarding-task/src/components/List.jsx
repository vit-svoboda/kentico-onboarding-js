import React, { Component } from 'react';

import initialState from '../store/initialState.js';
import TsComponent from './TsComponent.tsx';
import EditableListItem from './EditableListItem.jsx';
import NewListItem from './NewListItem.jsx';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(item) {
    this.setState({ items: [...this.state.items, item] });
  }

  editItem(item) {
    const items = [...this.state.items];
    const itemIndex = items.findIndex(i => i.id === item.id);
    items[itemIndex] = item;

    this.setState({ items });
  }

  deleteItem(item) {
    this.setState({ items: this.state.items.filter(i => i.id !== item.id) });
  }

  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="col-sm-12 text-center">
            <TsComponent name="Fancy" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-offset-2 col-md-8">
            <ul className="list-group">
              {this.state.items.map((item, index) =>
                <EditableListItem
                  key={item.id} index={index} item={item}
                  onEdit={this.editItem}
                  onDelete={this.deleteItem}
                />)}
              <NewListItem onAdd={this.addItem} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
