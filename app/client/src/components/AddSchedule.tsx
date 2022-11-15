import { ReadVResult } from 'fs';
import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';

function AddSchedule() {

    const [testDate, setTestDate] = useState(new Date());

    <DatePicker
    selected={testDate}
    onChange={setTestDate}
    showTimeSelect
    dateFormat="Pp"
    />

    const [day_of_week, setDayOfWeek] = useState("")
    const [date, setDate] = useState("")
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [location, setLocation] = useState("")

    const [start_time, setStartTime] = useState("")
    const [start_time_hour, setStartTimeHour] = useState(0)
    const [start_time_minute, setStartTimeMinute] = useState(0)
    const [start_time_AMPM, setStartTimeAMPM] = useState("")

    const [end_time, setEndTime] = useState("")
    const [end_time_hour, setEndTimeHour] = useState(0)
    const [end_time_minute, setEndTimeMinute] = useState(0)
    const [end_time_AMPM, setEndTimeAMPM] = useState("")

    const [total_hours, setTotalHours] = useState(0)

    const calculateTotalHours = (): number => {
        return 0;
    }

    const validateTotalHoursTestHelper = (start_time_hour: number, start_time_minute: number, start_time_AMPM: string, end_time_hour: number, end_time_minute: number, end_time_AMPM: string) => {
        if (start_time_hour === 12 && start_time_AMPM === "AM") {start_time_hour = 0}
        if (end_time_hour === 12 && end_time_AMPM === "AM") {end_time_hour = 0}

        if (start_time_hour !== 12 && start_time_AMPM === "PM") {start_time_hour += 12}
        if (end_time_hour !== 12 && end_time_AMPM === "PM") {end_time_hour += 12}

        console.log("start: "+start_time_hour+":"+start_time_minute+start_time_AMPM+" end: "+end_time_hour+":"+end_time_minute+end_time_AMPM)

        if (start_time_hour > end_time_hour) {return false}
        if (start_time_hour === end_time_hour && start_time_minute >= end_time_minute) {return false}

        return true;
    }

    const validateTotalHoursTest = () => {
        if (
        validateTotalHoursTestHelper(12,0,"AM",12,0,"AM") === false &&
        validateTotalHoursTestHelper(12,0,"AM",12,0,"PM") === true && 
        validateTotalHoursTestHelper(12,0,"PM",12,0,"AM") === false &&
        validateTotalHoursTestHelper(12,0,"PM",12,0,"PM") === false &&

        validateTotalHoursTestHelper(12,0,"AM",1,0,"AM") === true &&
        validateTotalHoursTestHelper(1,0,"AM",12,0,"AM") === false &&

        validateTotalHoursTestHelper(12,0,"AM",1,0,"PM") === true &&
        validateTotalHoursTestHelper(1,0,"PM",12,0,"AM") === false &&

        validateTotalHoursTestHelper(1,0,"PM",1,0,"PM") === false &&

        validateTotalHoursTestHelper(12,0,"PM",12,15,"PM") === true &&
        validateTotalHoursTestHelper(12,15,"PM",12,0,"PM") === false &&
        validateTotalHoursTestHelper(12,30,"PM",12,30,"PM") === false &&
        validateTotalHoursTestHelper(12,0,"PM",12,45,"PM") === true &&
        validateTotalHoursTestHelper(12,45,"PM",12,0,"PM") === false 
        ) { 
            console.log("tests passed");
            return
        }
        console.log("fail");
    }

    const validateTotalHours = (): boolean => {
        let temp_start_hour = start_time_hour;
        let temp_end_hour = end_time_hour;

        if (temp_start_hour === 12 && start_time_AMPM === "AM") {temp_start_hour = 0}
        if (temp_end_hour === 12 && end_time_AMPM === "AM") {temp_end_hour = 0}

        if (temp_start_hour !== 12 && start_time_AMPM === "PM") {temp_start_hour += 12}
        if (temp_end_hour !== 12 && end_time_AMPM === "PM") {temp_end_hour += 12}

        console.log("start: "+temp_start_hour+":"+start_time_minute+start_time_AMPM+" end: "+temp_end_hour+":"+end_time_minute+end_time_AMPM)

        if (temp_start_hour > temp_end_hour) {return false}
        if (temp_start_hour === temp_end_hour && start_time_minute >= end_time_minute) {return false}

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

    return(
        <div className="mt-20 ml-10">
            <button className="border" onClick={(e) => validateTotalHoursTest()}>TESTER</button>
            <form>
                
                
                <br/>
                <label>
                    day_of_week:
                    <input type="text" className="border" onChange={(e) => setDayOfWeek(e.target.value)}/>
                </label>
                
                <br/>
                <label>
                    date:
                    <input type="text" className="border" onChange={(e) => setDate(e.target.value)}/>
                </label>
                
                <br/>
                <label>
                    name:
                    <input type="text" className="border" onChange={(e) => setName(e.target.value)}/>
                </label>
                
                <br/>
                <label>
                    position:
                    <input type="text" className="border" onChange={(e) => setPosition(e.target.value)}/>
                </label>
                
                <br/>
                <label>
                    location:
                    <input type="text" className="border" onChange={(e) => setLocation(e.target.value)}/>
                </label>
                
                <br/>
                <label>
                    start_time:
                    {/* <input type="text" className="border" onChange={(e) => setStartTime(e.target.value)}/> */}
                    <div id="selectStartTime">
                        <select className="border" name="startTimeHour" id="startTimeHour" 
                        onChange={(e) => setStartTimeHour(parseInt(e.target.value))}>
                            <option value="12">12</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                        </select>
                        <select className="border" name="startTimeMinute" id="startTimeMinute" 
                        onChange={(e) => setStartTimeMinute(parseInt(e.target.value))}>
                            <option value="0">00</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                        </select>
                        <select className="border" name="startTimeAMPM" id="startTimeAMPM" 
                        onChange={(e) => setStartTimeAMPM(e.target.value)}>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                </label>

                <br/>
                <label>
                    end_time:
                    {/* <input type="text" className="border" onChange={(e) => setEndTime(e.target.value)}/> */}
                    <div id="selectEndTime">
                        <select className="border" name="endTimeHour" id="endTimeHour" 
                        onChange={(e) => setEndTimeHour(parseInt(e.target.value))}>
                            <option value="12">12</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                        </select>
                        <select className="border" name="endTimeMinute" id="endTimeMinute" 
                        onChange={(e) => setEndTimeMinute(parseInt(e.target.value))}>
                            <option value="0">00</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                        </select>
                        <select className="border" name="endTimeAMPM" id="endTimeAMPM" 
                        onChange={(e) => setEndTimeAMPM(e.target.value)}>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                </label>
                
                <br/>
                <label>
                    total_hours:
                    <p>{calculateTotalHours()}</p>
                </label>

                <button type="submit" onClick={handleSubmit} className="border">SUBMIT</button>
            </form>
        </div>
    )
}

export default AddSchedule;