import React from 'react';
import logo from '../logo.svg';

class NoteList extends React.Component {
  render() {
    return (
      <div className="note-list">
        <img src={logo} alt="Note Logo" />
        <ul>
          <li className="create-new">Create New</li>
          {this.props.titles.map((number) => <li key={number.id}>{number.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default NoteList;
