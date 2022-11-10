import React, { useEffect, useState } from 'react';
import internal from 'stream';

// Establish vars for this component via interfaces
interface Shift {
  id: number,
  day_of_week: string,
  date: string,
  name: string,
  position: string,
  location: string,
  start_time: string,
  end_time: string,
  total_hours: number,
}

interface ShiftProps {
  shifts: Shift[];
}

function App() {

  const [shifts, setShifts] = useState([])
  const [dates, setDates] = useState([])

  // useEffect(() => {
  //   console.log("shifts:", shifts);
  // }, [shifts]);
  
  useEffect(() => {

    function fetchData(endpoint: string): any {
      fetch(endpoint, {
        method: "GET",
        mode: 'cors'
      })
      .then(response => response.json()
        .then(data => {
            if (endpoint == "http://localhost:8000/schedule/shifts/") {
              console.log("Got following data from endpoint", endpoint, ":", data);
              setShifts(data);
            } else {
              setDates(data);
            }
        })
      )
      .catch((err) => {
        console.error(err);
      })
    }

    fetchData("http://localhost:8000/schedule/shifts/");
    fetchData("http://localhost:8000/schedule/dates/");

    

    // object.keys returns ["Monday", "Tuesday", ... ]
    // forEach iterates over that list.
    // the "day" var represents an individual day JSON object
    Object.keys(shifts).forEach((day) => {
      console.log("DAY", day);
      // then you can map the actual shifts in the day objects
    });

  }, [])
  
  return (
    <div className="App">

      {shifts?.map(day =>
        <p>day</p>
      )}

      <table>
        <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
            <tr>
              <td>{dates[0]}</td>
              <td>{dates[1]}</td>
              <td>{dates[2]}</td>
              <td>{dates[3]}</td>
              <td>{dates[4]}</td>
              <td>{dates[5]}</td>
              <td>{dates[6]}</td>
            </tr>
        </thead>

        <tbody>
          {/* 1 row of all the shifts for each day */}
          <tr>
            {
              
            }
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default App;