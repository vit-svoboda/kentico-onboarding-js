import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as itemActions from '../actions/itemActions.js';
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
    this.props.actions.itemUpdated(this.props.id, newValue);

    this.toggleEdit();
  }

  deleteItem() {
    this.props.actions.itemDeleted(this.props.id);
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
  actions: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(EditableListItem);
