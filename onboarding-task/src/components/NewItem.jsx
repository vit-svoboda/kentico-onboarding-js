import React from 'react';

class NewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentText: ''
    };

    this._onChange = this._onChange.bind(this);
    this._insertItem = this._insertItem.bind(this);
  }

  _onChange(event) {
    this.setState({currentText: event.target.value});
  }

  _insertItem() {
    const text = this.state.currentText;
    this.setState({currentText: ''});
    this.props.onInsert(text);
  }

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input type="text" className="form-control" value={this.state.currentText} onChange={this._onChange} />
        </div>
        <div className="form-group">
          <button className="btn btn-default" onClick={this._insertItem}>Add</button>
        </div>
      </div>
    );
  }
}

NewItem.propTypes = {
  onInsert: React.PropTypes.func.isRequired
};

export default NewItem;
