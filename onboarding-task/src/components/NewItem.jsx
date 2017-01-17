import React from 'react';
import {connect} from 'react-redux';
import insertItem from '../actions/insertItem';
import updateNewItem from '../actions/updateNewItem';

class NewItem extends React.Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    updateText: React.PropTypes.func.isRequired,
    insertItem: React.PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input type="text" className="form-control" value={this.props.text}
                 onChange={event => this.props.updateText(event.target.value)}/>
        </div>
        <div className="form-group">
          <button className="btn btn-default" onClick={() => this.props.insertItem(this.props.text)}>Add</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateText: text => {
      const action = updateNewItem(text);
      dispatch(action);
    },
    insertItem: text => {
      const clearTextAction = updateNewItem('');
      const insertItemAction = insertItem(text);
      dispatch(clearTextAction);
      dispatch(insertItemAction);
    }
  }
};

export default connect(null, mapDispatchToProps)(NewItem);
