import React from 'react';

class ListItemReadOnlyText extends React.Component {
  static propTypes = {
    item: React.PropTypes.shape({
      text: React.PropTypes.string.isRequired
    }).isRequired,
  };

  render() {
    return (
      <div className="form-group">
        <span>{this.props.item.text}</span>
      </div>
    );
  }
}

export default ListItemReadOnlyText;
