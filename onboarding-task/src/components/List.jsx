import React, { Component } from 'react';
import uuid from 'uuid';

import TsComponent from './TsComponent.tsx';
import EditableListItem from './EditableListItem.jsx';
import NewItem from './NewListItem.jsx';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: uuid(),
          value: 'Buy milk',
        },
        {
          id: uuid(),
          value: 'Master React',
        },
        {
          id: uuid(),
          value: 'Learn Redux',
        },
        {
          id: uuid(),
          value: 'Help making Draft awesome',
        },
      ],
    };

    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(item) {
    this.setState({ items: [...this.state.items, item] });
  }

  editItem(item) {
    const index = this.state.items.findIndex(i => i.id === item.id);

    // Spread the original collection to avoid state modifications.
    const items = [...this.state.items];
    items[index] = item;

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
              <NewItem onAdd={this.addItem} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
