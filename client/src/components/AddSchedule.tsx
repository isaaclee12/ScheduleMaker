// import { ReadVResult } from 'fs';
import React from 'react';
import Form from './Form';
import {useScheduleContext} from '../contexts/ScheduleContext'

function AddSchedule() {
    const setRequestType = useScheduleContext();
    setRequestType("POST");

    return (
        <Form/>
    )
}

export default AddSchedule;