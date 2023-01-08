import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';

import NavBar from './components/NavBar';
import Schedule from './components/Schedule';
import AddSchedule from './components/AddSchedule';
import AddScheduleDebug from './components/AddScheduleDebug';
import DeleteSchedule from './components/DeleteSchedule';
import UpdateSchedule from './components/UpdateSchedule';
import UpdateScheduleForm from './components/UpdateScheduleForm';
import Footer from './components/Footer';

import {defaultState, ScheduleContext} from './contexts/ScheduleContext';

function App() {
  const [requestType, setRequestType] = useState(defaultState.requestType);
  const changeRequestType = (r: string) => {
    setRequestType(r);
  };

  return (
    <div className="App">
      <NavBar/>
      <ScheduleContext.Provider value={{requestType, changeRequestType}}>
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