import React from 'react';

class NewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentText: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input type="text" className="form-control" value={this.state.currentText} onChange={this.onChange} />
        </div>
        <div className="form-group">
          <button className="btn btn-default" onClick={() => this.insertItem()}>Add</button>
        </div>
      </div>
    );
  }

  onChange(event) {
    this.setState({currentText: event.target.value});
  }

  insertItem() {
    const text = this.state.currentText;
    this.setState({currentText: ''});
    this.props.onInsert(text);
  }
}

export default NewItem;
