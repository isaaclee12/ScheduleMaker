// import { ReadVResult } from 'fs';
import React, {useState, useEffect, SetStateAction} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import DateSelector from './DateSelector';

function AddSchedule() {

    // const [testDate, setTestDate] = useState(new Date());

    // TODO: Get date and time and put it into a ISO8601 Date() object, WAY easier.

    const [day_of_week, setDayOfWeek] = useState("")
    const [date, setDate] = useState(new Date())
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [location, setLocation] = useState("")

    const [start_time, setStartTime] = useState("")
    const [end_time, setEndTime] = useState("")

    const [total_hours, setTotalHours] = useState(0)

    const calculateTotalHours = (): number => {
        return 0;
    }

    useEffect(() => {
        console.log(date);
    }, [date])

    const validateTotalHours = (): boolean => {
        // let temp_start_hour = start_time_hour;
        // let temp_end_hour = end_time_hour;

        // if (temp_start_hour === 12 && start_time_AMPM === "AM") {temp_start_hour = 0}
        // if (temp_end_hour === 12 && end_time_AMPM === "AM") {temp_end_hour = 0}

        // if (temp_start_hour !== 12 && start_time_AMPM === "PM") {temp_start_hour += 12}
        // if (temp_end_hour !== 12 && end_time_AMPM === "PM") {temp_end_hour += 12}

        // console.log("start: "+temp_start_hour+":"+start_time_minute+start_time_AMPM+" end: "+temp_end_hour+":"+end_time_minute+end_time_AMPM)

        // if (temp_start_hour > temp_end_hour) {return false}
        // if (temp_start_hour === temp_end_hour && start_time_minute >= end_time_minute) {return false}

        return true;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        console.log(e.target.value);
    }

    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {

        // Validate that the end time is after the start time
        const dataIsValid = validateTotalHours();
        console.log("Data Validity Status:",dataIsValid);

        // return on failed validation
        if (!dataIsValid) {
            return; 
            // TODO: Implement bool that sets an error saying "hi your times are wrong"
        }

        // get values from useState vars into a JSON
        const dataToSend = {
            day_of_week: day_of_week,
            date: date,
            name: name,
            position: position,
            location: location,
            start_time: start_time,
            end_time: end_time,
            total_hours: total_hours
        }

        // send the data via POST
        fetch("http://localhost:8000/schedule/add/", {
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

            {/* <button className="border" onClick={(e) => validateTotalHoursTest()}>TESTER</button> */}

            <h1 className="flex justify-center text-5xl mb-10 mt-5">Da Form</h1>

            <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500">
                <form className="mx-60 mt-10 pb-40">
                    <br/>
                    <label className="">
                        Day Of Week:
                        {/*{inputStyle}*/}
                        <input type="text" className={inputStyle} onChange={(e) => setDayOfWeek(e.target.value)}/>
                    </label>     

                    <br/>
                    <label>
                        date:
                        <div className={inputStyle}>
                            <DatePicker selected={date} onChange={(d: Date) => setDate(d)} />
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
                        start_time:
                        {/* <input type="text" className={inputStyle} onChange={(e) => setStartTime(e.target.value)}/> */}
                        <div id="selectStartTime">
                            <select className={inputStyle} name="startTimeHour" id="startTimeHour" 
                            onChange={(e) => setStartTime(e.target.value)}>
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
                                <option value="12:00AM">12:00PM</option>
                                <option value="1:00AM">1:00PM</option>
                                <option value="2:00AM">2:00PM</option>
                                <option value="3:00AM">3:00PM</option>
                                <option value="4:00AM">4:00PM</option>
                                <option value="5:00AM">5:00PM</option>
                                <option value="6:00AM">6:00PM</option>
                                <option value="7:00AM">7:00PM</option>
                                <option value="8:00AM">8:00PM</option>
                                <option value="9:00AM">9:00PM</option>
                                <option value="10:00AM">10:00PM</option>
                                <option value="11:00AM">11:00PM</option>
                            </select>
                        </div>
                    </label>

                    <br/>
                    <label>
                        end_time:
                        {/* <input type="text" className={inputStyle} onChange={(e) => setEndTime(e.target.value)}/> */}
                        <div id="selectEndTime">
                            <select className={inputStyle} name="endTimeHour" id="endTimeHour" 
                            onChange={(e) => setEndTime(e.target.value)}>
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
                                <option value="12:00AM">12:00PM</option>
                                <option value="1:00AM">1:00PM</option>
                                <option value="2:00AM">2:00PM</option>
                                <option value="3:00AM">3:00PM</option>
                                <option value="4:00AM">4:00PM</option>
                                <option value="5:00AM">5:00PM</option>
                                <option value="6:00AM">6:00PM</option>
                                <option value="7:00AM">7:00PM</option>
                                <option value="8:00AM">8:00PM</option>
                                <option value="9:00AM">9:00PM</option>
                                <option value="10:00AM">10:00PM</option>
                                <option value="11:00AM">11:00PM</option>
                            </select>
                        </div>
                    </label>
                    
                    <br/>
                    <label>
                        total_hours: {calculateTotalHours()}
                    </label>

                    <button type="submit" onClick={handleSubmit} className={inputStyle}>SUBMIT</button>
                </form>
            </div>
                
        </div>
    )
}

export default AddSchedule;