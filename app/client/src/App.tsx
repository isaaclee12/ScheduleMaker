import React, { useEffect, useState } from 'react';

function App() {

  const [shifts, setShifts] = useState([])
  const [dates, setDates] = useState([])

  const [mondayShifts, setMondayShifts] = useState([])
  const [tuesdayShifts, setTuesdayShifts] = useState([])
  const [wednesdayShifts, setWednesdayShifts] = useState([])
  const [thursdayShifts, setThursdayShifts] = useState([])
  const [fridayShifts, setFridayShifts] = useState([])
  const [saturdayShifts, setSaturdayShifts] = useState([])
  const [sundayShifts, setSundayShifts] = useState([])

  useEffect(() => {
    console.log("Monday:", console.log(mondayShifts));
  }, [mondayShifts]);
  
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

    setMondayShifts(shifts[0]);
    setTuesdayShifts(shifts[1]);
    setWednesdayShifts(shifts[2]);
    setThursdayShifts(shifts[3]);
    setFridayShifts(shifts[4]);
    setSaturdayShifts(shifts[5]);
    setSundayShifts(shifts[6]);

    

    // object.keys returns ["Monday", "Tuesday", ... ]
    // forEach iterates over that list.
    // the "day" var represents an individual day JSON object
    Object.keys(shifts).forEach((day) => {
      console.log("DAY", day);
      // then you can map the actual shifts in the day objects
      
      // .map(shift: Array<any>=>{
      //   <p>{shift.position}</p>
      // })
    });

  }, [])
  
  return (
    <div className="App">
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

        </tbody>
      </table>

      {
        shifts.map(shift=>{
          <p>{shift}</p>
        })
      }
      </div>
  );
}

export default App;