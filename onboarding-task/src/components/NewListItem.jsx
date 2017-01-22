import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as itemActions from '../actions/itemActions.js';

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

  handleSubmit(event) {
    event.preventDefault();

    this.props.actions.itemCreated(this.state.value);

    // Clear the texbox
    this.setState({ value: '' });
  }

  render() {
    return (
      <li className="list-group-item form-inline">
        <form className="form-group">
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter a new item." className="form-control" />
          <input type="submit" onClick={this.handleSubmit} value="Add" className="btn" />
        </form>
      </li>
    );
  }
}

NewListItem.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(NewListItem);
