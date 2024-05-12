// DateSelector.js
import React from 'react';
import '../style.css';


function DateSelector({ selectedDate, setSelectedDate }) {
  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <label htmlFor="date">Select Date: </label>
      <input type="date" id="date" value={selectedDate} onChange={handleChange} />
    </div>
  );
}

export default DateSelector;
