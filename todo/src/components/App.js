import React, { Component } from 'react';
import './../styles.css';
import Calendar from './Calendar';
import Header from './Header';
import Sidebar from './Sidebar';

class App extends Component {
	  constructor(props) {
  super(props);
  this.state = {

  };
}
  render() {
    return (
      <div className="app">
      <Header/>
      <Sidebar/>
        <Calendar/>
      </div>
    );
  }
}

export default App;
