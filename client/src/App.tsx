import {Route, Routes} from 'react-router-dom';
import useScheduleContext, {ScheduleContext} from './contexts/ScheduleContext';

import NavBar from './components/NavBar';
import Schedule from './components/Schedule';
// import Form from './components/Form';
import AddSchedule from './components/AddSchedule';
import AddScheduleDebug from './components/AddScheduleDebug';
import DeleteSchedule from './components/DeleteSchedule';
import UpdateSchedule from './components/UpdateSchedule';
import UpdateScheduleForm from './components/UpdateScheduleForm';
import Footer from './components/Footer';
// import useScheduleContext from './contexts/ScheduleContext';

function App() {

  const requestType = useScheduleContext().requestType;
  const setRequestType = useScheduleContext().setRequestType;

  return (
    <div className="App">
      <NavBar/>
      <ScheduleContext.Provider value={{requestType, setRequestType}}>
        <Routes>
          <Route index element={<Schedule/>}></Route>
          <Route path="add" element={<AddSchedule/>}></Route>
          <Route path="addDebug" element={<AddScheduleDebug/>}></Route>
          <Route path="delete" element={<DeleteSchedule/>}></Route>
          <Route path="update" element={<UpdateSchedule/>}></Route>
          <Route path="update-form" element={<UpdateScheduleForm/>}></Route>
        </Routes>
      </ScheduleContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;