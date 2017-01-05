import React from 'react';
import ReadOnlyText from './ListItemReadOnlyText'
import EditableText from './ListItemEditableText'

const ReadOnlyMode = Symbol('readonly');
const EditMode = Symbol('edit');

class ListItemContainer extends React.Component {
  static propTypes = {
    item: React.PropTypes.shape({
      text: React.PropTypes.string.isRequired
    }).isRequired,
    itemOrder: React.PropTypes.number.isRequired,
    onUpdate: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      renderMode: ReadOnlyMode
    };

    this._openEditMode = this._openEditMode.bind(this);
    this._closeEditMode = this._closeEditMode.bind(this);
  }

  _openEditMode() {
    if (this.state.renderMode !== EditMode) {
      this.setState({renderMode: EditMode});
    }
  }

  _closeEditMode() {
    this.setState({renderMode: ReadOnlyMode});
  }

  render() {
    const textPlaceholder = this.state.renderMode === ReadOnlyMode
      ? <ReadOnlyText item={this.props.item}/>
      : <EditableText item={this.props.item}
                      onCloseEditMode={this._closeEditMode}
                      onUpdate={this.props.onUpdate}
                      onDelete={this.props.onDelete}/>;

    return (
      <tr onClick={this._openEditMode}>
        <td>
          <div className="form-inline">
            <span>{this.props.itemOrder}.&nbsp;</span>
            {textPlaceholder}
          </div>
        </td>
      </tr>
    );
  }
}

export default ListItemContainer;
