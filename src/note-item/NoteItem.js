import React, { Component } from 'react';
import NoteUpdateForm from '../note-update-form/NoteUpdateForm';
import { connect } from 'react-redux';
import { noteDelete, noteUpdate } from '../action/note-actions';

class NoteItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'default'
    }
    this.editMode = this.editMode.bind(this);
    this.defaultMode = this.defaultMode.bind(this);
  }

  editMode() {
    this.setState({ mode : 'edit' });
  }

  defaultMode() {
    this.setState({ mode : 'default' })
  }

  render() {

    if (this.state.mode === 'default') {
      return (
        <li onDoubleClick={this.editMode}>
          <h2>{this.props.note.title}</h2>
          <button onClick={() => this.props.onRemove(this.props.note)}>x</button>
          <p>{this.props.note.content}</p>
        </li>
      );
    } else {
      return (
        <NoteUpdateForm 
          note={this.props.note} 
          onCancel={this.defaultMode} 
          onDone={this.defaultMode}
        />
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRemove: note => dispatch(noteDelete(note)),
  onUpdate: note => dispatch(noteUpdate(note)),
})

export default connect(null, mapDispatchToProps)(NoteItem);
