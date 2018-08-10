import React, { Component } from "react";
import { connect } from 'react-redux';
import { noteUpdate } from '../action/note-actions';

class NoteUpdateForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = { ...props.note };
  }
  
  onSubmit = event => {
    event.preventDefault();
    this.props.onDone();
    this.props.noteUpdate(this.state);
  };

  onCancel = () => this.props.onCancel();

  onChange = event => {
    const val =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const changedBit = {
      [event.target.name]: val
    };
    this.setState(changedBit);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} onChange={this.onChange}>
        <input name="title" placeholder="title" value={this.state.title} />
        <textarea
          name="content"
          placeholder="content"
          value={this.state.content}
        />
        <label>
          <span>editing</span>
          <input name="editing" type="checkbox" checked={this.state.editing} />
        </label>
        <label>
          <span>completed</span>
          <input name="completed" type="checkbox" checked={this.state.completed} />
        </label>
        <button>Create Note</button>
        <button type="button" onClick={this.onCancel}>cancel</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  noteUpdate: note => dispatch(noteUpdate(note))
})
export default connect(null, mapDispatchToProps)(NoteUpdateForm);

