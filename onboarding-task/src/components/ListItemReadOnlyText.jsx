import React from 'react';

class ListItemReadOnlyText extends React.Component {
  render() {
    return (
      <div className="form-group">
        <span>{this.props.text}</span>
      </div>
    );
  }
}

ListItemReadOnlyText.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default ListItemReadOnlyText;
