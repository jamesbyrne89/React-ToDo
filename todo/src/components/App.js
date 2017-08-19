import React, { Component } from 'react';
import './../styles.css';
import Calendar from './Calendar';

class App extends Component {
	  constructor(props) {
  super(props);
  this.state = {

  };
}
  render() {
    return (
      <div className="app">
        <Calendar/>
      </div>
    );
  }
}

export default App;
