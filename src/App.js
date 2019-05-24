import React from 'react';
import RichEditorExample from './component/rich-editor.js';
import NoteList from './component/note-list.js'
import './App.css';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          title: "This is the title",
          content: "this is the content",
          id: "0001"
        },
        {
          title: "This is the second title",
          content: "this is the content 2",
          id: "0002"
        },
        {
          title: "I will keep going",
          content: "this is the content",
          id: "0003"
        },
        {
          title: "I will keep going",
          content: "this is the content",
          id: "0004"
        }
      ],
      selected: "0002"
    }
  }
  render() {
    let selectedNote = this.state.notes.filter(i => (i.id === this.state.selected));
    return (
      <div className="wrapper">
        <NoteList titles={this.state.notes} />
        <RichEditorExample />
      </div>
    );
  }
}

export default NoteApp;
