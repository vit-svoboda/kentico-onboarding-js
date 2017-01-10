import React from 'react';
import {connect} from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ReadOnlyText from './ListItemReadOnlyText';
import EditableText from './ListItemEditableText';
import checkItemOut from '../actions/checkItemOut';
import {TEXT, IS_CHECKED_OUT} from '../descriptors/itemProperties';

class ListItemContainer extends React.Component {
  static propTypes = {
    item: ImmutablePropTypes.contains({
      [TEXT]: React.PropTypes.string.isRequired,
      [IS_CHECKED_OUT]: React.PropTypes.bool.isRequired
    }).isRequired,
    itemOrder: React.PropTypes.number.isRequired,
    checkOut: React.PropTypes.func.isRequired
  };

  render() {
    const textPlaceholder = !this.props.item.get(IS_CHECKED_OUT)
      ? <ReadOnlyText item={this.props.item}/>
      : <EditableText item={this.props.item}/>;

    return (
      <tr onClick={this.props.checkOut}>
        <td>
          <div className="form-inline">
            <span>{this.props.itemOrder}.&nbsp;</span>
            {textPlaceholder}
          </div>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (dispatch, ownProps) => {
  return {
    checkOut: () => {
      if (!ownProps.item.get(IS_CHECKED_OUT)) {
        const action = checkItemOut(ownProps.item);
        dispatch(action);
      }
    }
  }
};

export default connect(null, mapStateToProps)(ListItemContainer);
