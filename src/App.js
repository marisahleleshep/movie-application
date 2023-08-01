import './App.css';
import GetMovies from './components/GetMovies';
import HomePage from './components/HomePage'; 
import Carousels from './components/HomePage/carosel';




function App() {
  return (


    <div className="App">
        <HomePage/>
        <Carousels/>
      <GetMovies/>
      
     
    </div>
  );
}

export default App;
