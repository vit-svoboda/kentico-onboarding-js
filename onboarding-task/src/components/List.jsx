import React, { Component } from 'react';

import TsComponent from './TsComponent.tsx';
import EditableListItem from './EditableListItem.jsx';
import NewItem from './NewListItem.jsx';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Buy milk', 'Master React', 'Learn Redux', 'Help making Draft awesome',
      ],
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.setState({ items: [...this.state.items, item] });
  }

  render() {
    return (
      <div className="row">
        {/* TODO: You can delete the assignment part once you do not need it */}
        <div className="row">
          <div className="col-sm-12 text-center">
            <TsComponent name="Fancy" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-offset-2 col-md-8">
            <ul className="list-group">
              {this.state.items.map((item, index) => <EditableListItem key={index} index={index} item={item} />)}
              <NewItem onAdd={this.addItem} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
