import React, { Component } from 'react';
import './../styles.css';


const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];





const Calendar = () => {


this.generateCalendar = this.generateCalendar.bind(this);
this.getMonth = this.getMonth.bind(this);
this.convertDateToDay = this.convertDateToDay.bind(this);

generateCalendar(numberOfDays, day, month, year) {
 let weekday = months[convertDateToDay(year, month, day)];
 if (weekday in dates) {
  dates[weekday].push(day)
 }
 else {
  dates[weekday] = [day];
  day++;
  return day > numberOfDays ? dates : generateCalendar(numberOfDays, month, day, year);
 }
  }

getMonth() {
  let date =  new Date(month, year);
  let numberOfDays = this.date.getDate();
  let monthName;
  let firstDay = 0;
  let calendar;
};

convertDateToDay() {
  // Determines the week day based on the date
  return (new Date(year, month, day)).getDay();
};

generateCalendar(numberOfDays, month, day, year) {
  
};

render() {
    return (
      <div className='date-picker'>
      
        <header className='header'>
          <button className='arrow-left'>Left</button>
          <time className='month'>August</time>
          <button className='arrow-right'>Right</button>
        </header>
        
        <div className='dates'>

        </div>
      </div>
    );
  }
}

export default Calendar;
