import * as actions from './note-actions';

describe('actions', () => {
  it('should create an action to add a note', () => {

    const note = {
      title:'testing',
      content:'more testing',
      completed: false,
      editing: true
    };


    const actualAction = actions.noteCreate({
      title:'testing',
      content:'more testing',
      completed: false,
      editing: true
    });


    expect(actualAction.type).toBe('NOTE_CREATE');
    expect(actualAction.payload.title).toBe(note.title);
    expect(actualAction.payload.content).toBe(note.content);
    expect(actualAction.payload.completed).toBe(note.completed);
    expect(actualAction.payload.editing).toBe(note.editing);
    expect(actualAction.payload.id).toBeDefined();
  })
})