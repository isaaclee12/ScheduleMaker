import React, {useState, useEffect} from 'react';

import SubmitButton from './SubmitButton';

function AddSchedule() {

    const [id, setId] = useState(0)
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

    return(
        <div className="mt-20 ml-10">
            <form>
                <label>
                    Test:
                    <input type="text" className="border"/>
                </label>
                {/* <input type="submit" value="Submit" className="border"/> */}
                <SubmitButton/>
            </form>
        </div>
    )
}

export default AddSchedule;