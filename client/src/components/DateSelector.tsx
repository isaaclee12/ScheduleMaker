import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateSelector = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date: Date) => {
    ;
  }

  return (
    <div>
        <DatePicker selected={startDate} onChange={(d: Date) => setStartDate(d)} />
        <p>{startDate.toISOString().substring(0,10)}</p>
    </div>
  );
};

export default DateSelector;