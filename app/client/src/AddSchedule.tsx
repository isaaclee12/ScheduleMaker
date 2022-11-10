import { ReadVResult } from 'fs';
import React, {useState, useEffect} from 'react';
import SubmitButton from './SubmitButton';

function AddSchedule() {

    const [day_of_week, setDayOfWeek] = useState("")
    const [date, setDate] = useState("")
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [location, setLocation] = useState("")
    const [start_time, setStartTime] = useState("")
    const [end_time, setEndTime] = useState("")
    const [total_hours, setTotalHours] = useState(0)

    const [sendingDataBool, setSendingDataBool] = useState(false)

    // useEffect(() => {
    //     console.log("\nFORM\nday_of_week:", day_of_week);
    //     console.log("date:", date);
    //     console.log("name:", name);
    //     console.log("position:", position);
    //     console.log("location:", location);
    //     console.log("start_time:", start_time);
    //     console.log("end_time:", end_time);
    //     console.log("total_hours:", total_hours);
    // }, [day_of_week, date, name, position, location, start_time, end_time, total_hours])
    

    useEffect(() => {
        
    }, [sendingDataBool])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        console.log(e.target.value);
    }

    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        console.log("\nFORM:\n\nday_of_week:", day_of_week);
        console.log("date:", date);
        console.log("name:", name);
        console.log("position:", position);
        console.log("location:", location);
        console.log("start_time:", start_time);
        console.log("end_time:", end_time);
        console.log("total_hours:", total_hours);
    }

    return(
        <div className="mt-20 ml-10">
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
                    <input type="text" className="border" onChange={(e) => setStartTime(e.target.value)}/>
                </label>
                
                <br/>
                <label>
                    end_time:
                    <input type="text" className="border" onChange={(e) => setEndTime(e.target.value)}/>
                </label>
                
                <br/>
                <label>
                    total_hours:
                    <input type="text" className="border" onChange={(e) => setTotalHours(parseInt(e.target.value))}/>
                </label>

                {/* <input type="submit" value="Submit" className="border"/> */}
                <button type="submit" onClick={handleSubmit} className="border">SUBMIT</button>
                {/* <SubmitButton/> */}
            </form>
        </div>
    )
}

export default AddSchedule;