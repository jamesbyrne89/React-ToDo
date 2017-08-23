import React, { Component } from 'react';
import './../styles.css';
import Main from './Main';
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
      <Main/>
        
      </div>
    );
  }
}

export default App;
