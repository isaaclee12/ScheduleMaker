import React, { useEffect, useState } from 'react';

function Schedule() {

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


    return(
        <div className="grid place-items-center h-screen">
            <table className="w-1/2">
                <thead className="border-b">
                    <tr className="border-t">
                    <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-center border-x">Monday</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-center border-x">Tuesday</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-center border-x">Wednesday</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-center border-x">Thursday</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-center border-x">Friday</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-center border-x">Saturday</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-center border-x">Sunday</th>
                    </tr>
                    <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-center border-x">{dates[0]}</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-center border-x">{dates[1]}</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-center border-x">{dates[2]}</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-center border-x">{dates[3]}</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-center border-x">{dates[4]}</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-center border-x">{dates[5]}</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-center border-x">{dates[6]}</th>
                    </tr>
                </thead>

                <tbody className="text-center space-y-4">
                <tr>
                    
                    <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap border">
                    {mondayShifts.map((shift, index)=>
                        <div key={index}>
                        <br/>
                        <p>{shift['name']}</p>
                        <p>{shift['position']}</p>
                        <p>{shift['start_time'] + "-" + shift['end_time']}</p>
                        <p>{" (" + shift['total_hours'] + " hours)"}</p>
                        </div>
                    )}
                    </td>
                    
                    <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap border">
                    {tuesdayShifts.map((shift, index)=>
                        <div key={index}>
                        <br/>
                        <p>{shift['name']}</p>
                        <p>{shift['position']}</p>
                        <p>{shift['start_time'] + "-" + shift['end_time']}</p>
                        <p>{" (" + shift['total_hours'] + " hours)"}</p>
                        </div>
                    )}
                    </td>
                    
                    <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap border">
                    {wednesdayShifts.map((shift, index)=>
                        <div key={index}>
                        <br/>
                        <p>{shift['name']}</p>
                        <p>{shift['position']}</p>
                        <p>{shift['start_time'] + "-" + shift['end_time']}</p>
                        <p>{" (" + shift['total_hours'] + " hours)"}</p>
                        </div>
                    )}
                    </td>
                    
                    <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap border">
                    {thursdayShifts.map((shift, index)=>
                        <div key={index}>
                        <br/>
                        <p>{shift['name']}</p>
                        <p>{shift['position']}</p>
                        <p>{shift['start_time'] + "-" + shift['end_time']}</p>
                        <p>{" (" + shift['total_hours'] + " hours)"}</p>
                        </div>
                    )}
                    </td>
                    
                    <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap border">
                    {fridayShifts.map((shift, index)=>
                        <div key={index}>
                        <br/>
                        <p>{shift['name']}</p>
                        <p>{shift['position']}</p>
                        <p>{shift['start_time'] + "-" + shift['end_time']}</p>
                        <p>{" (" + shift['total_hours'] + " hours)"}</p>
                        </div>
                    )}
                    </td>
                    
                    <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap border">
                    {saturdayShifts.map((shift, index)=>
                        <div key={index}>
                        <br/>
                        <p>{shift['name']}</p>
                        <p>{shift['position']}</p>
                        <p>{shift['start_time'] + "-" + shift['end_time']}</p>
                        <p>{" (" + shift['total_hours'] + " hours)"}</p>
                        </div>
                    )}
                    </td>
                    
                    <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap border">
                    {sundayShifts.map((shift, index)=>
                        <div key={index}>
                        <br/>
                        <p>{shift['name']}</p>
                        <p>{shift['position']}</p>
                        <p>{shift['start_time'] + "-" + shift['end_time']}</p>
                        <p>{" (" + shift['total_hours'] + " hours)"}</p>
                        </div>
                    )}
                    </td>

                </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Schedule;