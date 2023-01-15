// import { ReadVResult } from 'fs';
import {useEffect} from 'react';
import Form from './Form';
import useScheduleContext from '../contexts/ScheduleContext'

function AddSchedule() {
    // TODO NEXT: Pass in background colors and "Update Shift" title via context! 
    const {changeRequestType, changeFormBackgroundStyle} = useScheduleContext();

    useEffect(() => {
        changeRequestType("PATCH");
        changeFormBackgroundStyle("bg-gradient-to-r from-green-200 to-green-500");
    }, [])

    return (
        <Form/>
    )
}

export default AddSchedule;