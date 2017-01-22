import React, { Component } from 'react';
import uuid from 'uuid';

import initialState from '../store/initialState.js';
import TsComponent from './TsComponent.tsx';
import EditableListItem from './EditableListItem.jsx';
import NewListItem from './NewListItem.jsx';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.upsertItem = this.upsertItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  upsertItem(value, key) {
    this.setState({ items: this.state.items.set(key || uuid(), value) });
  }

  deleteItem(key) {
    this.setState({ items: this.state.items.delete(key) });
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
              {this.state.items.entrySeq().map(([key, value], index) =>
                <EditableListItem
                  key={key} index={index} id={key} value={value}
                  onEdit={this.upsertItem}
                  onDelete={this.deleteItem}
                />)}
              <NewListItem onAdd={this.upsertItem} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
