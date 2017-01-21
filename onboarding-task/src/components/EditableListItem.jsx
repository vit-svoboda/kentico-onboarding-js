import React, { Component, PropTypes } from 'react';

class EditableListItem extends Component {
  render() {
    return (
      <li className="list-group-item">
        <span>{this.props.index + 1}. {this.props.item}</span>
      </li>
    );
  }
}

EditableListItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
};

export default EditableListItem;
