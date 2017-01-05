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
                      onUpdate={this.props.onUpdate}
                      onDelete={this.props.onDelete} />;

    return (
      <tr onClick={this.openEditMode.bind(this)}>
        <td>
          <div className="form-inline">
            <span>{this.props.itemOrder}.&nbsp;</span>
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
}

export default ListItemContainer;
