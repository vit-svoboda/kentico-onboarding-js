import React from 'react';

class ListItemEditableText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentText: props.item.text
    };
  }

  render() {
    return (
      <div className="form-group">
        <input type="text" className="form-control" value={this.state.currentText} onChange={this.handleChange.bind(this)} />
        <button className="btn btn-primary" onClick={this.confirmChange.bind(this)}>Save</button>
        <button className="btn btn-default" onClick={this.props.closeEditModeHandler}>Cancel</button>
        <button className="btn btn-danger" onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }

  handleChange(event) {
    this.setState({currentText: event.target.value});
  }

  confirmChange() {
    this.props.confirmChangesHandler(this.state.currentText);
    this.props.closeEditModeHandler();
  }
}

export default ListItemEditableText;
