// import { ReadVResult } from 'fs';
import {useEffect} from 'react';
import Form from './Form';
import useScheduleContext from '../contexts/ScheduleContext'

function AddSchedule() {
    // TODO NEXT: Pass in background colors and "Update Shift" title via context! 
    const {changeRequestType} = useScheduleContext();

    useEffect(() => {
        changeRequestType("PATCH");
    }, [])

    return (
        <Form/>
    )
}

export default AddSchedule;