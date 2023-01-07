import {Route, Routes} from 'react-router-dom';
import ScheduleProvider from './contexts/ScheduleContext';

import NavBar from './components/NavBar';
import Schedule from './components/Schedule';
// import Form from './components/Form';
import AddSchedule from './components/AddSchedule';
import AddScheduleDebug from './components/AddScheduleDebug';
import DeleteSchedule from './components/DeleteSchedule';
import UpdateSchedule from './components/UpdateSchedule';
import UpdateScheduleForm from './components/UpdateScheduleForm';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <ScheduleProvider>
        <Routes>
          <Route index element={<Schedule/>}></Route>
          <Route path="add" element={<AddSchedule/>}></Route>
          <Route path="addDebug" element={<AddScheduleDebug/>}></Route>
          <Route path="delete" element={<DeleteSchedule/>}></Route>
          <Route path="update" element={<UpdateSchedule/>}></Route>
          <Route path="update-form" element={<UpdateScheduleForm/>}></Route>
        </Routes>
      </ScheduleProvider>
      <Footer/>
    </div>
  );
}

export default App;