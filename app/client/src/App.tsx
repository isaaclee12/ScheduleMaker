// import internal from 'stream';
import NavBar from './components/NavBar';
import Schedule from './components/Schedule';
import AddSchedule from './components/AddSchedule';

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