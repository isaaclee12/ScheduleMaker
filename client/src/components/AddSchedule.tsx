// import { ReadVResult } from 'fs';
import {useEffect} from 'react';
import Form from './Form';
import useScheduleContext from '../contexts/ScheduleContext'

function AddSchedule() {
    const {requestType, setRequestType} = useScheduleContext();

    useEffect(() => {
        setRequestType("POST");
        console.log("request type set");
    }, [])

    useEffect(() => {
        console.log("Request type in AddSchedule:", requestType);
    }, [requestType])

    return (
        <Form/>
    )
}

export default AddSchedule;