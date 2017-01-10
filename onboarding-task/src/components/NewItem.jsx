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
          <input type="text" className="form-control" value={this.props.text} onChange={this.props.updateText}/>
        </div>
        <div className="form-group">
          <button className="btn btn-default" onClick={this.props.insertItem}>Add</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (dispatch, ownProps) => {
  return {
    updateText: event => {
      const action = updateNewItem(event.target.value);
      dispatch(action);
    },
    insertItem: () => {
      const text = ownProps.text;
      const clearTextAction = updateNewItem('');
      const insertItemAction = insertItem(text);
      dispatch(clearTextAction);
      dispatch(insertItemAction);
    }
  }
};

export default connect(null, mapStateToProps)(NewItem);
