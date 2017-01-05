import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes'

class ListItemReadOnlyText extends React.Component {
  static propTypes = {
    item: ImmutablePropTypes.contains({
      text: React.PropTypes.string.isRequired,
    }).isRequired
  };

  render() {
    return (
      <div className="form-group">
        <span>{this.props.item.get('text')}</span>
      </div>
    );
  }
}

export default ListItemReadOnlyText;
