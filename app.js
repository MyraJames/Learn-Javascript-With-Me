import React, { Component } from 'react';
import JournalList from "./journals/journal_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Reaact, Props, and State Deepdive</h1>
        <JournalList heading="List 1"/>
        <JournalList heading="List 2"/>
        
      </div>
    );
  }
}
