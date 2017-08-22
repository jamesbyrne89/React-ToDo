import React, { Component } from 'react';
import './../styles.css';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Header from './Header';

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];





class Calendar extends Component {
  constructor(){
    super()
  this.state = {
    selectedDay: new Date(),
  };
}
  handleDayClick = day => {
    this.setState({
      selectedDay: day,
    });
  };
  render() {
    return (
      <div>
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
      </div>
    );
  }
};

export default Calendar;
