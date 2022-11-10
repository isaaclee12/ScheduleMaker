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
    const [total_hours, setTotal_hours] = useState(0)

    const [sendingDataBool, setSendingDataBool] = useState(false)

    useEffect(() => {
        
    }, [sendingDataBool])

    const handleInputChange = () => {
        
    }

    return(
        <div className="mt-20 ml-10">
            <form>
                
                <br/>
                <label>
                    day_of_week:
                    <input type="text" className="border" onChange={handleInputChange}/>
                </label>
                
                <br/>
                <label>
                    date:
                    <input type="text" className="border" onChange={handleInputChange}/>
                </label>
                
                <br/>
                <label>
                    name:
                    <input type="text" className="border" onChange={handleInputChange}/>
                </label>
                
                <br/>
                <label>
                    position:
                    <input type="text" className="border" onChange={handleInputChange}/>
                </label>
                
                <br/>
                <label>
                    location:
                    <input type="text" className="border" onChange={handleInputChange}/>
                </label>
                
                <br/>
                <label>
                    start_time:
                    <input type="text" className="border" onChange={handleInputChange}/>
                </label>
                
                <br/>
                <label>
                    end_time:
                    <input type="text" className="border" onChange={handleInputChange}/>
                </label>
                
                <br/>
                <label>
                    total_hours:
                    <input type="text" className="border" onChange={handleInputChange}/>
                </label>

                {/* <input type="submit" value="Submit" className="border"/> */}
                <SubmitButton/>
            </form>
        </div>
    )
}

export default AddSchedule;