import React from 'react';
import {connect} from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ListItemContainer from './ListItemContainer';
import NewItem from './NewItem';
import {ID as ITEM_ID} from '../descriptors/itemProperties';
import {TEXT as FORM_TEXT} from '../descriptors/insertFormProperties';

class List extends React.Component {
  static propTypes = {
    items: ImmutablePropTypes.map.isRequired,
    insertForm: ImmutablePropTypes.contains({
      [FORM_TEXT]: React.PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const items = this
      .props
      .items
      .valueSeq()
      .map((itemToDisplay, index) => {
        return <ListItemContainer item={itemToDisplay}
                                  itemOrder={index + 1}
                                  key={itemToDisplay.get(ITEM_ID)}/>;
      });

    return (
      <div className="row">
        <div className="row">
          <div className="col-sm-12 col-md-offset-2 col-md-8">
            <table className="table table-bordered">
              <tbody>
                {items}

                <tr>
                  <td>
                    <NewItem text={this.props.insertForm.get(FORM_TEXT)}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  items: store.items,
  insertForm: store.insertForm
});

export default connect(mapStateToProps)(List);
