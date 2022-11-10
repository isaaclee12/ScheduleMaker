import React, { useEffect, useState } from 'react';

function App() {

  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    console.log("Schedule data fetched:", schedule);
  }, [schedule]);
  
  useEffect(() => {

    function fetchData(endpoint: string): void {
      fetch(endpoint, {
        method: "GET",
        mode: 'cors'
      })
      .then(response => response.json()
        .then(data => {
            setSchedule(data);
        })
      )
      .catch((err) => {
        console.error(err);
      })
    }

    fetchData("http://localhost:8000/schedule/");
    // Monday thru Sunday

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
        </thead>

        <tbody>
          {schedule.map(days=>
          <tr key={days['date']}>
            <td>{days['date']}</td>
            <td>{days['shifts']}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;