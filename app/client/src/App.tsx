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


  const [mondayShifts, setMondayShifts] = useState([])
  const [tuesdayShifts, setTuesdayShifts] = useState([])
  const [wednesdayShifts, setWednesdayShifts] = useState([])
  const [thursdayShifts, setThursdayShifts] = useState([])
  const [fridayShifts, setFridayShifts] = useState([])
  const [saturdayShifts, setSaturdayShifts] = useState([])
  const [sundayShifts, setSundayShifts] = useState([])

  useEffect(() => {
    console.log("shifts:", mondayShifts);
  }, [mondayShifts]);
  
  useEffect(() => {

    function fetchData(endpointName: string): any {

      // add endpoint to string
      let endpoint = "http://localhost:8000/schedule/" + endpointName +  "/";

      fetch(endpoint, {
        method: "GET",
        mode: 'cors'
      })
      .then(response => response.json()
        .then(data => {
            switch (endpointName) {
              case "shifts":
                setShifts(data);
                break;
 
              case "dates":
                setDates(data);
                break;
 
              case "monday":
                setMondayShifts(data);
                break;
 
              case "tuesday":
                setTuesdayShifts(data);
                break;
 
              case "wednesday":
                setWednesdayShifts(data);
                break;
 
              case "thursday":
                setThursdayShifts(data);
                break;
 
              case "friday":
                setFridayShifts(data);
                break;
 
              case "saturday":
                setSaturdayShifts(data);
                break;
 
              case "sunday":
                setSundayShifts(data);
                break;
            }
        })
      )
      .catch((err) => {
        console.error(err);
      })
    }

    let arr = ["shifts", "dates", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    
    // fetch data for each item
    arr.forEach((item) =>
      fetchData(item)
    )
    

    // object.keys returns ["Monday", "Tuesday", ... ]
    // forEach iterates over that list.
    // the "day" var represents an individual day JSON object
    // Object.keys(shifts).forEach((day) => {
      // console.log("DAY", day);
      // then you can map the actual shifts in the day objects
    // });

  }, [])
  
  return (
    <div className="App">
      <table className="min-w-full">
        <thead className="border-b">
            <tr>
              <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">Monday</th>
              <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">Tuesday</th>
              <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">Wednesday</th>
              <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">Thursday</th>
              <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">Friday</th>
              <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">Saturday</th>
              <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">Sunday</th>
            </tr>
            <tr>
              <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">{dates[0]}</th>
              <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">{dates[1]}</th>
              <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">{dates[2]}</th>
              <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">{dates[3]}</th>
              <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">{dates[4]}</th>
              <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">{dates[5]}</th>
              <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-4 text-center">{dates[6]}</th>
            </tr>
        </thead>

        <tbody className="text-center space-y-4">
          <tr>
            
            <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {mondayShifts.map((shift, index)=>
                <div key={index}>
                  <br/>
                  <p>{shift['name']}</p>
                  <p>{shift['position']}</p>
                  <p>{shift['start_time'] + "-" + shift['end_time']}</p>
                  <p>{" (" + shift['total_hours'] + " hours )"}</p>
                </div>
              )}
            </td>
            
            <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {tuesdayShifts.map((shift, index)=>
                <div key={index}>
                  <br/>
                  <p>{shift['name']}</p>
                  <p>{shift['position']}</p>
                  <p>{shift['start_time'] + "-" + shift['end_time']}</p>
                  <p>{" (" + shift['total_hours'] + " hours )"}</p>
                </div>
              )}
            </td>
            
            <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {wednesdayShifts.map((shift, index)=>
                <div key={index}>
                  <br/>
                  <p>{shift['name']}</p>
                  <p>{shift['position']}</p>
                  <p>{shift['start_time'] + "-" + shift['end_time']}</p>
                  <p>{" (" + shift['total_hours'] + " hours )"}</p>
                </div>
              )}
            </td>
            
            <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {thursdayShifts.map((shift, index)=>
                <div key={index}>
                  <br/>
                  <p>{shift['name']}</p>
                  <p>{shift['position']}</p>
                  <p>{shift['start_time'] + "-" + shift['end_time']}</p>
                  <p>{" (" + shift['total_hours'] + " hours )"}</p>
                </div>
              )}
            </td>
            
            <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {fridayShifts.map((shift, index)=>
                <div key={index}>
                  <br/>
                  <p>{shift['name']}</p>
                  <p>{shift['position']}</p>
                  <p>{shift['start_time'] + "-" + shift['end_time']}</p>
                  <p>{" (" + shift['total_hours'] + " hours )"}</p>
                </div>
              )}
            </td>
            
            <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {saturdayShifts.map((shift, index)=>
                <div key={index}>
                  <br/>
                  <p>{shift['name']}</p>
                  <p>{shift['position']}</p>
                  <p>{shift['start_time'] + "-" + shift['end_time']}</p>
                  <p>{" (" + shift['total_hours'] + " hours )"}</p>
                </div>
              )}
            </td>
            
            <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {sundayShifts.map((shift, index)=>
                <div key={index}>
                  <br/>
                  <p>{shift['name']}</p>
                  <p>{shift['position']}</p>
                  <p>{shift['start_time'] + "-" + shift['end_time']}</p>
                  <p>{" (" + shift['total_hours'] + " hours )"}</p>
                </div>
              )}
            </td>

          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default App;