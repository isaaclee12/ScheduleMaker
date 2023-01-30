import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Schedule from './components/Schedule';
import AddSchedule from './components/AddSchedule';
import DeleteSchedule from './components/DeleteSchedule';
import UpdateSchedule from './components/UpdateSchedule';
import UpdateScheduleForm from './components/UpdateScheduleForm';
import Footer from './components/Footer';

import { defaultState, ScheduleContext } from './contexts/ScheduleContext';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

function App() {
  const [requestType, setRequestType] = useState(defaultState.requestType);
  const changeRequestType = (r: string) => {
    setRequestType(r);
  };
  const [formBackgroundStyle, setFormBackgroundStyle] = useState(defaultState.formBackgroundStyle);
  const changeFormBackgroundStyle = (r: string) => {
    setFormBackgroundStyle(r);
  };

  const serverAddress = defaultState.serverAddress;

  const [calendarData, setCalendarData] = useState<calendarEventArray>([]);


  interface Shift {
    date: string,
    day_of_week: string,
    end_time: string,
    id: string,
    location: string,
    name: string,
    position: string,
    start_time: string,
    total_hours: number,
  }

  type ShiftArray = Shift[];

  interface calendarEvent {
    title: string,
    date: string
  }

  type calendarEventArray = calendarEvent[];

  const aggregateShiftsData = (data: ShiftArray[]) => {
    const allShifts: calendarEventArray = [];
    let title: string;
    let date: string;
    data.forEach(item => {
      item.forEach(row => {
        title = row.name.concat("\n", row.position, "\n", row.location, "\n", row.start_time, "-", row.end_time, "\n(", row.total_hours.toString(), " hours)")
        date = row.date;
        console.log({title, date});
        allShifts.push({title, date});
      });
    })
    setCalendarData(allShifts);
  }

  const handleEventClick = (arg: any) => {
    alert(arg.event.title);
  }

  useEffect(() => {
    fetch("http://" + serverAddress + ":8000/schedule/shifts/", {
      method: "GET",
      mode: 'cors'
    }).then(response => response.json()
      .then(data => {
        aggregateShiftsData(data.slice(1, data.length));
      })
    )

  }, [])

  return (
    <div className="App">
      <NavBar />
      <div className="p-32">{/* className="flex items-stretch w-screen justify-center h-screen"> */}
        <FullCalendar 
          plugins={[dayGridPlugin, interactionPlugin]} 
          eventClick={handleEventClick}
          initialView="dayGridMonth" 
          eventMinHeight={100}
          eventDisplay={'block'}
          events={calendarData}/>
      </div>
      <ScheduleContext.Provider value={{ requestType, changeRequestType, formBackgroundStyle, changeFormBackgroundStyle, serverAddress }}>
        <Routes>
          <Route index element={<Schedule />}></Route>
          <Route path="add" element={<AddSchedule />}></Route>
          <Route path="delete" element={<DeleteSchedule />}></Route>
          <Route path="update" element={<UpdateSchedule />}></Route>
          <Route path="update-form" element={<UpdateScheduleForm />}></Route>
        </Routes>
      </ScheduleContext.Provider>
      <Footer />
    </div>
  );
}

export default App;