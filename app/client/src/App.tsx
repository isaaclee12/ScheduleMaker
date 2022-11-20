// import internal from 'stream';
import NavBar from './components/NavBar';
import Schedule from './components/Schedule';
import AddSchedule from './components/AddSchedule';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <AddSchedule/>
      {/* <Schedule/> */}
      <Footer/>
    </div>
  );
}

export default App;