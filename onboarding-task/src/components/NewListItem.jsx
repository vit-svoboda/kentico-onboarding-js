import React, { Component, PropTypes } from 'react';
import uuid from 'uuid';

class NewListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    this.props.onAdd({ id: uuid(), value: this.state.value });
    this.setState({ value: '' });
  }

  render() {
    return (
      <li className="list-group-item form-inline">
        <div className="form-group">
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter a new item." className="form-control" />
          <input type="button" onClick={this.handleSubmit} value="Add" className="btn" />
        </div>
      </li>
    );
  }
}

NewListItem.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default NewListItem;
