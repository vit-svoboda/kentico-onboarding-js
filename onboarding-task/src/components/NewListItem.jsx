import React, { PropTypes } from 'react';

class NewListItem extends React.Component {
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
    this.props.onAdd(this.state.value);
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
