import React from 'react';
import {connect} from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ReadOnlyText from './ListItemReadOnlyText';
import EditableText from './ListItemEditableText';
import checkItemOut from '../actions/checkItemOut';
import itemProperties from '../descriptors/itemProperties';

class ListItemContainer extends React.Component {
  static propTypes = {
    item: ImmutablePropTypes.contains({
      [itemProperties.TEXT]: React.PropTypes.string.isRequired,
      [itemProperties.IS_CHECKED_OUT]: React.PropTypes.bool.isRequired
    }).isRequired,
    itemOrder: React.PropTypes.number.isRequired,
    checkOut: React.PropTypes.func.isRequired
  };

  render() {
    const textPlaceholder = !this.props.item.get(itemProperties.IS_CHECKED_OUT)
      ? <ReadOnlyText item={this.props.item}/>
      : <EditableText item={this.props.item}/>;

    return (
      <tr onClick={() => this.props.checkOut(this.props.item)}>
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

const mapDispatchToProps = dispatch => {
  return {
    checkOut: item => {
      if (!item.get(itemProperties.IS_CHECKED_OUT)) {
        const action = checkItemOut(item);
        dispatch(action);
      }
    }
  }
};

export default connect(null, mapDispatchToProps)(ListItemContainer);
