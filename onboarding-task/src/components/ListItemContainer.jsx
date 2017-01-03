import React from 'react';
import ReadOnlyText from './ListItemReadOnlyText'
import EditableText from './ListItemEditableText'

const ReadOnlyMode = Symbol('readonly');
const EditMode = Symbol('edit');

class ListItemContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderMode: ReadOnlyMode
    }
  }

  render() {
    const textPlaceholder = this.state.renderMode === ReadOnlyMode
      ? <ReadOnlyText item={this.props.item} />
      : <EditableText item={this.props.item}
                      closeEditModeHandler={this.closeEditModeHandler.bind(this)}
                      confirmChangesHandler={this.updateItem.bind(this)}
                      deleteItemHandler={this.deleteItem.bind(this)} />;

    return (
      <tr onClick={this.openEditMode.bind(this)}>
        <td>
          <div className="form-inline">
            <span>{this.props.item.order}.&nbsp;</span>
            {textPlaceholder}
          </div>
        </td>
      </tr>
    );
  }

  openEditMode() {
    if (this.state.renderMode !== EditMode) {
      this.setState({ renderMode: EditMode});
    }
  }

  closeEditModeHandler() {
    this.setState({ renderMode: ReadOnlyMode});
  }


  updateItem(newText) {
    this.props.updateHandler(this.props.item, newText);
  }

  deleteItem() {
    this.props.deleteHandler(this.props.item);
  }
}

export default ListItemContainer;
