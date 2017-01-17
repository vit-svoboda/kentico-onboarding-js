import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import itemProperties from '../descriptors/itemProperties';

class ListItemReadOnlyText extends React.Component {
  static propTypes = {
    item: ImmutablePropTypes.contains({
      [itemProperties.TEXT]: React.PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    return (
      <div className="form-group">
        <span>{this.props.item.get(itemProperties.TEXT)}</span>
      </div>
    );
  }
}

export default ListItemReadOnlyText;
