// import { ReadVResult } from 'fs';
import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useScheduleContext from '../contexts/ScheduleContext'

function Form() {

    const requestType = useScheduleContext([]);

    const [dayOfWeek, setDayOfWeek] = useState("")
    const [date, setDate] = useState(new Date())
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [location, setLocation] = useState("")

    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")

    const [totalHours, setTotalHours] = useState(0)

    // calculate total hours based on start and end time
    const calculateTotalHours = () => {
        // convert strings as times to ints with values from 0 to 23 to represent 24 hour time
        // where 0 = 12am and 23 = 11pm

        // Get hours value
        // All values before ":", split time by colon and get first value, convert to int 
        let startTimeValue = parseInt(startTime.split(":")[0]);
        let endTimeValue = parseInt(endTime.split(":")[0]);

        // if either time is 12, remove 12 hours
        if (startTimeValue === 12) {
            startTimeValue -= 12;
        }
        if (endTimeValue === 12) {
            endTimeValue -= 12;
        }

        // if either time has PM, add 12 hours respectively
        if (startTime.includes("PM")) {
            startTimeValue += 12;
        }
        if (endTime.includes("PM")) {
            endTimeValue += 12;
        }

        // NOTE: This is where I see my error occuring
        console.log(startTime, endTime)

        // calculate time between start and end times
        const total = endTimeValue - startTimeValue;

        console.log("TOTAL HOURS:", total) //"start:", endTimeValue, "-", "end", startTimeValue, "=", total)

        // if that value is negative, return 0.
        if (totalHours < 0) {
            const total = 0;
            setTotalHours(total);
        }

        // else, return the value  
        setTotalHours(total);
    }

    useEffect(() => {
        console.log("FORM DATA:", requestType);
    }, [])

    const validateData = (): boolean => {

        // Validate the fields:
        // dayOfWeek: item is in Monday thru Sunday
        
        // date: item is in ISO format
        // date.toISOString().substring(0,10)

        // name: Is string, not longer than 100 characters
        
        // position: Is string, not longer than 100 characters
        // location: Is string, not longer than 100 characters
        // startTime: Is string, not longer than 7 characters
        // endTime: Is string, not longer than 7 characters
        // totalHours: is a small positive integer (min 0, max 32767)

        /* TODO: Move this to App.test.tsx once in testing phase
        let temp_start_hour = startTime_hour;
        let temp_end_hour = endTime_hour;

        if (temp_start_hour === 12 && startTime_AMPM === "AM") {temp_start_hour = 0}
        if (temp_end_hour === 12 && endTime_AMPM === "AM") {temp_end_hour = 0}

        if (temp_start_hour !== 12 && startTime_AMPM === "PM") {temp_start_hour += 12}
        if (temp_end_hour !== 12 && endTime_AMPM === "PM") {temp_end_hour += 12}

        console.log("start: "+temp_start_hour+":"+startTime_minute+startTime_AMPM+" end: "+temp_end_hour+":"+endTime_minute+endTime_AMPM)

        if (temp_start_hour > temp_end_hour) {return false}
        if (temp_start_hour === temp_end_hour && startTime_minute >= endTime_minute) {return false}
        */
        return true;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        console.log(e.target.value);
    }

    // TODO: Pass in HTTP type - PATCH, POST, OR DELETE to handleSubmit
    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {

        // console.log(totalHours);

        // Validate that the end time is after the start time
        const dataIsValid = validateData();
        console.log("Data Validity Status:",dataIsValid);

        // return on failed validation
        if (!dataIsValid) {
            return;
            // TODO: Implement bool that sets an error saying "hi your times are wrong"
        }

        // get values from useState hooks into a JSON
        const dataToSend = {
            day_of_week: dayOfWeek,
            date: date.toISOString().substring(0,10), // These functions trim just the date part of the date object in ISO8601 format, e.g. "2022-11-13"
            name: name,
            position: position,
            location: location,
            start_time: startTime,
            end_time: endTime,
            total_hours: totalHours
        }

        // send the data via POST
        fetch("http://localhost:8000/schedule/shifts/", {
            method: requestType.toString(),
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

    useEffect(() => {
        calculateTotalHours();
    }, [startTime, endTime])

    // STYLING
    const [inputStyle, setInputStyle] = useState("form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none border flex items-center justify-center")

    return(
        <div className=" bg-gradient-to-r from-cyan-500 to-blue-500">
            <br/>

            {/* <button className="border" onClick={(e) => validateTotalHoursTest()}>TESTER</button> */}

            <h1 className="flex justify-center text-5xl mb-10 mt-5">Add Shift</h1>

            <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500">
                <form className="mx-60 mt-10 pb-40">
                    <br/>
                    <label className="">
                        Day Of Week:
                        <select className={inputStyle} onChange={(e) => setDayOfWeek(e.target.value)}>
                            <option value="">Select A Day</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>   
                    </label>     

                    <br/>
                    <label>
                        date:
                        <div className={inputStyle}>
                            {/* Note: currently, the datepicker defaults to today no matter what */}
                            <DatePicker selected={date} value="11/07/2022" onChange={(d: Date) => setDate(d)} />
                        </div>       
                    </label>

                    <br/>
                    <label>
                        name:
                        <input type="text" className={inputStyle} onChange={(e) => setName(e.target.value)}/>
                    </label>
                    
                    <br/>
                    <label>
                        position:
                        <input type="text" className={inputStyle} onChange={(e) => setPosition(e.target.value)}/>
                    </label>
                    
                    <br/>
                    <label>
                        location:
                        <input type="text" className={inputStyle} onChange={(e) => setLocation(e.target.value)}/>
                    </label>
                    
                    <br/>
                    <label>
                        startTime:
                        {/* <input type="text" className={inputStyle} onChange={(e) => setStartTime(e.target.value)}/> */}
                        <div id="selectStartTime">
                            <select className={inputStyle} name="startTimeHour" id="startTimeHour"
                            onChange={(e) => setStartTime(e.target.value)}> {/*set the time AND calculate total hours*/}
                                <option value="">Select Start Time</option>
                                <option value="12:00AM">12:00AM</option>
                                <option value="1:00AM">1:00AM</option>
                                <option value="2:00AM">2:00AM</option>
                                <option value="3:00AM">3:00AM</option>
                                <option value="4:00AM">4:00AM</option>
                                <option value="5:00AM">5:00AM</option>
                                <option value="6:00AM">6:00AM</option>
                                <option value="7:00AM">7:00AM</option>
                                <option value="8:00AM">8:00AM</option>
                                <option value="9:00AM">9:00AM</option>
                                <option value="10:00AM">10:00AM</option>
                                <option value="11:00AM">11:00AM</option>
                                <option value="12:00PM">12:00PM</option>
                                <option value="1:00PM">1:00PM</option>
                                <option value="2:00PM">2:00PM</option>
                                <option value="3:00PM">3:00PM</option>
                                <option value="4:00PM">4:00PM</option>
                                <option value="5:00PM">5:00PM</option>
                                <option value="6:00PM">6:00PM</option>
                                <option value="7:00PM">7:00PM</option>
                                <option value="8:00PM">8:00PM</option>
                                <option value="9:00PM">9:00PM</option>
                                <option value="10:00PM">10:00PM</option>
                                <option value="11:00PM">11:00PM</option>
                            </select>
                        </div>
                    </label>

                    <br/>
                    <label>
                        endTime:
                        {/* <input type="text" className={inputStyle} onChange={(e) => setEndTime(e.target.value)}/> */}
                        <div id="selectEndTime">
                            <select className={inputStyle} name="endTimeHour" id="endTimeHour" 
                            onChange={(e) => setEndTime(e.target.value)}> {/*set the time AND calculate total hours*/}
                                <option value="">Select End Time</option>
                                <option value="12:00AM">12:00AM</option>
                                <option value="1:00AM">1:00AM</option>
                                <option value="2:00AM">2:00AM</option>
                                <option value="3:00AM">3:00AM</option>
                                <option value="4:00AM">4:00AM</option>
                                <option value="5:00AM">5:00AM</option>
                                <option value="6:00AM">6:00AM</option>
                                <option value="7:00AM">7:00AM</option>
                                <option value="8:00AM">8:00AM</option>
                                <option value="9:00AM">9:00AM</option>
                                <option value="10:00AM">10:00AM</option>
                                <option value="11:00AM">11:00AM</option>
                                <option value="12:00PM">12:00PM</option>
                                <option value="1:00PM">1:00PM</option>
                                <option value="2:00PM">2:00PM</option>
                                <option value="3:00PM">3:00PM</option>
                                <option value="4:00PM">4:00PM</option>
                                <option value="5:00PM">5:00PM</option>
                                <option value="6:00PM">6:00PM</option>
                                <option value="7:00PM">7:00PM</option>
                                <option value="8:00PM">8:00PM</option>
                                <option value="9:00PM">9:00PM</option>
                                <option value="10:00PM">10:00PM</option>
                                <option value="11:00PM">11:00PM</option>
                            </select>
                        </div>
                    </label>
                    
                    <br/>
                    <label>
                        totalHours: {totalHours}
                    </label>

                    <button type="submit" onClick={handleSubmit} className={inputStyle}>SUBMIT</button>
                </form>
            </div>
                
        </div>
    )
}

export default Form;