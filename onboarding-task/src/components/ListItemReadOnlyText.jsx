import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {TEXT} from '../descriptors/itemProperties';

class ListItemReadOnlyText extends React.Component {
  static propTypes = {
    item: ImmutablePropTypes.contains({
      [TEXT]: React.PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    return (
      <div className="form-group">
        <span>{this.props.item.get(TEXT)}</span>
      </div>
    );
  }
}

export default ListItemReadOnlyText;
