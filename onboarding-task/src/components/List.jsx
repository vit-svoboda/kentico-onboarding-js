import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import EditableListItem from './EditableListItem.jsx';
import NewListItem from './NewListItem.jsx';

class List extends Component {
  render() {
    return (
      <div className="row">

        <div className="row">
          <div className="col-sm-12 col-md-offset-2 col-md-8">
            <ul className="list-group">
              {this.props.items.entrySeq().map(([key, value], index) =>
                <EditableListItem key={key} index={index} id={key} value={value} />)}
              <NewListItem />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.instanceOf(Map).isRequired,
};

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(List);
