import {Route, Routes} from 'react-router-dom';

import NavBar from './components/NavBar';
import Schedule from './components/Schedule';
import AddSchedule from './components/AddSchedule';
import DeleteSchedule from './components/DeleteSchedule';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route index element={<Schedule/>}></Route>
        <Route path="add" element={<AddSchedule/>}></Route>
        <Route path="delete" element={<DeleteSchedule/>}></Route>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;