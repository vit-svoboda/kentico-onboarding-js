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
    };

    this.openEditMode = this.openEditMode.bind(this);
    this.closeEditMode = this.closeEditMode.bind(this);
  }

  render() {
    const textPlaceholder = this.state.renderMode === ReadOnlyMode
      ? <ReadOnlyText item={this.props.item} />
      : <EditableText item={this.props.item}
                      onCloseEditMode={this.closeEditMode}
                      onUpdate={this.props.onUpdate}
                      onDelete={this.props.onDelete} />;

    return (
      <tr onClick={this.openEditMode}>
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

  closeEditMode() {
    this.setState({ renderMode: ReadOnlyMode});
  }
}

export default ListItemContainer;
