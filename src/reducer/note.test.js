import reducer from './note';
import * as actions from '../action/note-actions';

describe('Note reducer', () => {

  it('should have no notes initially', () => {
    const newState = reducer([], {});
    expect(newState).toEqual([]);
  });

  it('should add a note', () => {
    const newState = reducer([], actions.noteCreate({
      title:'foo',
      content: 'bar',
      editing: false,
      completed: true
    }));

    expect(newState.length).toBe(1);
  });
});