import {Route, Routes} from 'react-router-dom';

import NavBar from './components/NavBar';
import Schedule from './components/Schedule';
import AddSchedule from './components/AddSchedule';
import AddScheduleDebug from './components/AddScheduleDebug';
import DeleteSchedule from './components/DeleteSchedule';
import UpdateSchedule from './components/UpdateSchedule';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route index element={<Schedule/>}></Route>
        <Route path="add" element={<AddSchedule/>}></Route>
        <Route path="addDebug" element={<AddScheduleDebug/>}></Route>
        <Route path="delete" element={<DeleteSchedule/>}></Route>
        <Route path="update" element={<UpdateSchedule/>}></Route>
      </Routes>
      
      {/* <Footer/> */}
    </div>
  );
}

export default App;