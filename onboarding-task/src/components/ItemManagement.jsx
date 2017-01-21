import React, { Component, PropTypes } from 'react';

class ItemManagement extends Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <form className="form-group">
        <input type="text" value={this.state.value} className="form-control" onChange={this.handleChange} />
        <input type="submit" className="btn btn-primary" value="Save" onClick={this.handleSubmit} />
        <input type="button" className="btn" value="Cancel" onClick={this.props.onCancel} />
        <input type="button" className="btn btn-danger" value="Delete" onClick={this.props.onDelete} />
      </form>
    );
  }
}

ItemManagement.propTypes = {
  value: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ItemManagement;
