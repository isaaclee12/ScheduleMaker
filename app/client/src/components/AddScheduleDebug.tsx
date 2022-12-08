// import { ReadVResult } from 'fs';
import React, {useState, useEffect, SetStateAction} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { start } from 'repl';
import DateSelector from './DateSelector';

function AddScheduleDebug() {

    // const [testDate, setTestDate] = useState(new Date());

    // TODO: Get date and time and put it into a ISO8601 Date() object, WAY easier.

    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        // Debug values
        const dataToSend = {
            day_of_week: "Monday",
            date: "2022-11-07",
            name: "Becky",
            position: "Host",
            location: "Main St",
            start_time: "3:00PM",
            end_time: "8:00PM",
            total_hours: 5
        }

        // send the data via POST
        fetch("http://localhost:8000/schedule/shifts", {
            method: "POST",
            mode: 'cors',
            // set the body of this request to that JSON we just made
            body: JSON.stringify(dataToSend)
        })
        .then(response => response.json()
            .then(data => {
                console.log(data);
            }))
        .catch(err => {
            console.error(err);
        })
    }

    // STYLING
    const [inputStyle, setInputStyle] = useState("form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none border flex items-center justify-center")

    return(
        <div className=" bg-gradient-to-r from-cyan-500 to-blue-500">
            <br/>

            <h1 className="flex justify-center text-5xl mb-10 mt-5">Add Shift TEST</h1>

            <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500">
                <form className="mx-60 mt-10 pb-40">
                    <br/>
                    <button type="submit" onClick={handleSubmit} className={inputStyle}>SUBMIT</button>
                </form>
            </div>
                
        </div>
    )
}

export default AddScheduleDebug;