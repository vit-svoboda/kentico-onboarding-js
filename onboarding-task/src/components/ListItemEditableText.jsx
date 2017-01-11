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
        <input type="text" className="form-control" value={this.props.item.get(itemProperties.TEXT)} onChange={this.props.updateText}/>
        <button className="btn btn-primary" onClick={this.props.confirmChanges}>Save</button>
        <button className="btn btn-default" onClick={this.props.revertChanges}>Cancel</button>
        <button className="btn btn-danger" onClick={this.props.deleteItem}>Delete</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateText: event => {
      const action = updateItem(ownProps.item, event.target.value);
      dispatch(action);
    },
    confirmChanges: () => {
      const action = checkItemIn(ownProps.item);
      dispatch(action);
    },
    revertChanges: () => {
      const action = revertItem(ownProps.item);
      dispatch(action);
    },
    deleteItem: () => {
      const action = deleteItem(ownProps.item);
      dispatch(action);
    }
  }
};

export default connect(null, mapDispatchToProps)(ListItemEditableText);
