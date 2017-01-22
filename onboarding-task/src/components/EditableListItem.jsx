import React, { Component, PropTypes } from 'react';

import ItemManagement from './ItemManagement';

class EditableListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { isEdited: false };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  toggleEdit() {
    this.setState({ isEdited: !this.state.isEdited });
  }

  editItem(newValue) {
    this.props.onEdit(this.props.id, newValue);

    this.toggleEdit();
  }

  deleteItem() {
    this.props.onDelete(this.props.id);
  }

  render() {
    const value = this.props.value;

    return (
      <li className="list-group-item form-inline">
        <div className="form-group">
          <span>{this.props.index + 1}. </span>
          {this.state.isEdited ?
            <ItemManagement
              value={value}
              onCancel={this.toggleEdit}
              onSubmit={this.editItem}
              onDelete={this.deleteItem}
            /> :
            <span onClick={this.toggleEdit}>{value}</span>}
        </div>
      </li>
    );
  }
}

EditableListItem.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EditableListItem;
