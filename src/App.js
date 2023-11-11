import './App.css';
import GetMovies from './components/GetMovies';
import HomePage from './components/HomePage'; 
import Carousels from './components/HomePage/carosel';
import MovieCategory from './components/MovieCategory';
// import Footer from './components/Footer';
import Footer from './components/Footer'



function App() {
  return (

    <div className="App">
        <HomePage/>
        {/* <Carousels/> */}
        <GetMovies/>
       <Footer/>
    </div>
  );
}

export default App;
