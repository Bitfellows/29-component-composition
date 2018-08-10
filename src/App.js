import React, { Component, Fragment } from "react";
import { Provider } from 'react-redux';
import NoteCreateForm from "./note-create-form/NoteCreateForm";
import NoteList from "./note-list/NoteList";
import createAppStore from './lib/store';

import './App.css';

const store = createAppStore();

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <h1>Notes R Us</h1>
          <NoteCreateForm />
          <NoteList />
        </Fragment>
      </Provider>
    );
  }
}