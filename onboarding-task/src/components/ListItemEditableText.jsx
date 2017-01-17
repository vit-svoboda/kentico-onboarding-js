import React from 'react';
import {connect} from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import deleteItem from '../actions/deleteItem';
import updateItem from '../actions/updateItem';
import checkItemIn from '../actions/checkItemIn';
import revertItem from '../actions/revertItem';
import itemProperties from '../descriptors/itemProperties';

class ListItemEditableText extends React.Component {
  static propTypes = {
    item: ImmutablePropTypes.contains({
      [itemProperties.TEXT]: React.PropTypes.string.isRequired
    }).isRequired,
    updateText: React.PropTypes.func.isRequired,
    confirmChanges: React.PropTypes.func.isRequired,
    revertChanges: React.PropTypes.func.isRequired,
    deleteItem: React.PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="form-group">
        <input type="text" className="form-control" value={this.props.item.get(itemProperties.TEXT)}
               onChange={event => this.props.updateText(this.props.item, event.target.value)}/>
        <button className="btn btn-primary" onClick={() => this.props.confirmChanges(this.props.item)}>Save</button>
        <button className="btn btn-default" onClick={() => this.props.revertChanges(this.props.item)}>Cancel</button>
        <button className="btn btn-danger" onClick={() => this.props.deleteItem(this.props.item)}>Delete</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateText: (item, newText) => {
      const action = updateItem(item, newText);
      dispatch(action);
    },
    confirmChanges: item => {
      const action = checkItemIn(item);
      dispatch(action);
    },
    revertChanges: item => {
      const action = revertItem(item);
      dispatch(action);
    },
    deleteItem: item => {
      const action = deleteItem(item);
      dispatch(action);
    }
  }
};

export default connect(null, mapDispatchToProps)(ListItemEditableText);
