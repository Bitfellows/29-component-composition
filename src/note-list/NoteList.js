import React from 'react';
import NoteItem from '../note-item/NoteItem';
import { connect } from 'react-redux';
const NoteList = (props) => {
  return (
    <ul>
      {props.notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  notes: state,
})


export default connect(mapStateToProps)(NoteList)

