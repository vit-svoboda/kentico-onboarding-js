import React from 'react';

class NewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentText: ''
    }
  }

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input type="text" className="form-control" value={this.state.currentText} onChange={this.handleChange.bind(this)} />
        </div>
        <div className="form-group">
          <button className="btn btn-default" onClick={this.addItem.bind(this)}>Add</button>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({currentText: event.target.value});
  }

  addItem() {
    const text = this.state.currentText;
    this.setState({currentText: ''});
    this.props.addItemHandler(text);
  }
}

export default NewItem;
