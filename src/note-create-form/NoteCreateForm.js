import React, { Component } from "react";
import uuid from "uuid/v4";
import { connect } from 'react-redux';
import { noteCreate } from '../action/note-actions';

class NoteCreateForm extends Component {
  
  constructor(props) {
    super(props);
    this.defaultState = {
      editing: false,
      completed: false,
      content: "",
      title: ""
    };
    this.state = {...this.defaultState};
  }
  
  onSubmit = event => {
    event.preventDefault();
    this.props.noteCreate({ ...this.state, id: uuid() });
    this.setState({ ...this.defaultState });
  };

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
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  noteCreate: note => dispatch(noteCreate(note))
});

export default connect(null, mapDispatchToProps)(NoteCreateForm);
