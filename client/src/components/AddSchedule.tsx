// import { ReadVResult } from 'fs';
import {useEffect} from 'react';
import Form from './Form';
import useScheduleContext from '../contexts/ScheduleContext'

function AddSchedule() {
    const {requestType, changeRequestType} = useScheduleContext();

    useEffect(() => {
        changeRequestType("POST");
    }, [])

    return (
        <Form/>
    )
}

export default AddSchedule;