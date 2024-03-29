import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router";

function UpdateSchedule() {

    // This hook gets our context variable
    // const [updateScheduleContext] = useContext(UpdateScheduleContext)

    const [shifts, setShifts] = useState([])
    const [dates, setDates] = useState([])

    const [mondayShifts, setMondayShifts] = useState([])
    const [tuesdayShifts, setTuesdayShifts] = useState([])
    const [wednesdayShifts, setWednesdayShifts] = useState([])
    const [thursdayShifts, setThursdayShifts] = useState([])
    const [fridayShifts, setFridayShifts] = useState([])
    const [saturdayShifts, setSaturdayShifts] = useState([])
    const [sundayShifts, setSundayShifts] = useState([])

    // Establish navigation function
    const navigate = useNavigate();

    const updateShift = (event: any, shift: any) => {

        // Get the id of the shift as shift["id"]
        // Send the id to UpdateScheduleForm.tsx***
        sessionStorage.setItem("ShiftToUpdateID", shift["id"]);
        console.log((sessionStorage.getItem("ShiftToUpdateID")));
        
        // Send user to the form page
        if (shift["id"]) {
            navigate('/update-form');
        }

        return;
    }

    useEffect(() => {
        console.log("shifts:", mondayShifts);
    }, [mondayShifts]);
    
    useEffect(() => {

        fetch("https://localhost:8000/schedule/shifts/", {
            method: "GET",
            mode: 'cors'
        }).then(response => response.json()
            .then(data => {
                setDates(data[0]);
                setMondayShifts(data[1]);
                setTuesdayShifts(data[2]);
                setWednesdayShifts(data[3]);
                setThursdayShifts(data[4]);
                setFridayShifts(data[5]);
                setSaturdayShifts(data[6]);                 
                setSundayShifts(data[7]);                 
            })
        )

    }, [])


    return(
        <div className="grid place-items-center h-screen">
            {/* <UpdateScheduleContext.Provider value={}> */}

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
                        {/* Edit Button */}
                        <FontAwesomeIcon icon={faEdit} className="editButton" onClick={(e) => {updateShift(e, shift)}}/>
                        <p>
                        {" " + shift['name']}</p>
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
                        {/* Edit Button */}
                        <FontAwesomeIcon icon={faEdit} className="editButton" onClick={(e) => {updateShift(e, shift)}}/>
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
                        {/* Edit Button */}
                        <FontAwesomeIcon icon={faEdit} className="editButton" onClick={(e) => {updateShift(e, shift)}}/>
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
                        {/* Edit Button */}
                        <FontAwesomeIcon icon={faEdit} className="editButton" onClick={(e) => {updateShift(e, shift)}}/>
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
                        {/* Edit Button */}
                        <FontAwesomeIcon icon={faEdit} className="editButton" onClick={(e) => {updateShift(e, shift)}}/>
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
                        {/* Edit Button */}
                        <FontAwesomeIcon icon={faEdit} className="editButton" onClick={(e) => {updateShift(e, shift)}}/>
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
                        {/* Edit Button */}
                        <FontAwesomeIcon icon={faEdit} className="editButton" onClick={(e) => {updateShift(e, shift)}}/>
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

            {/* </UpdateScheduleContext.Provider> */}

        </div>
    )
}

export default UpdateSchedule;