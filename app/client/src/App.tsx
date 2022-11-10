// import internal from 'stream';
import NavBar from './NavBar';
import Schedule from './Schedule';
import AddSchedule from './AddSchedule';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <AddSchedule/>
      <Schedule/>
    </div>
  );
}

export default App;