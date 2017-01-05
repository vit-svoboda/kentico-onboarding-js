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
      ? <ReadOnlyText text={this.props.text} />
      : <EditableText text={this.props.text}
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

ListItemContainer.propTypes = {
  text: React.PropTypes.string.isRequired,
  itemOrder: React.PropTypes.number.isRequired,
  onUpdate: React.PropTypes.func.isRequired,
  onDelete: React.PropTypes.func.isRequired
};

export default ListItemContainer;
