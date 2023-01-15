// import { ReadVResult } from 'fs';
import {useEffect} from 'react';
import Form from './Form';
import useScheduleContext from '../contexts/ScheduleContext'

function AddSchedule() {
    const {changeRequestType, changeFormBackgroundStyle} = useScheduleContext();

    useEffect(() => {
        changeRequestType("POST");
        changeFormBackgroundStyle("bg-gradient-to-r from-cyan-500 to-blue-500");
    }, [])

    return (
        <Form/>
    )
}

export default AddSchedule;