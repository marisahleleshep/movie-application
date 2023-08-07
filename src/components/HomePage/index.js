// import React, { useState } from "react";
// import './carosel.css'
// import { searchMovies } from "../../utils/utilities";


// const HomePage = () => {
//   const [searchValue, setSearchValue] = useState("");
//   const [searchResults, setSearchResults] = useState([]);  
//   const handleInput = (event) => {
//     setSearchValue(event.target.value);
//   };  
//   const handleSearch = async () => {
//     const results = await searchMovies(searchValue);
//     setSearchResults(results.results);
//   };  
  
//   return (
//     <div className="Navbar">
//       <div className="nav">
//         <div>
//           <h1 className="logo">
//             <span>Movie</span>
//           </h1>
//         </div>
//         <div className="search">
//           <input
//             value={searchValue}
//             onChange={handleInput}
//             type="text"
//             placeholder="Search"
//           />
//           <button onClick={handleSearch}>Search</button>
//         </div>
//         <div className="links">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">My List</a></li>
//           <button>Sign in</button>
//         </div>
//       </div>     
//        {searchResults.length > 0 && (
//         <div className="search-results">
//           {searchResults.map((movie) => (
//             <div key={movie.id} className="search-result">
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//               />
//               <h3>{movie.title}</h3>
//               <p>{movie.overview}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
// export default HomePage;


import React, { useState } from "react";
import "./carosel.css";
import { searchMovies } from "../../utils/utilities";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = async () => {
    const results = await searchMovies(searchValue);
    setSearchResults(results.results);
  };

  const renderSearchResults = () => {
    if (searchResults.length === 0) {
      return null;
    }

    return (
      <div className="search-results">
        {searchResults.map((movie) => (
          <div key={movie.id} className="search-result">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="Navbar">
      <div className="nav">
        <div>
          <h1 className="logo">
            <span>Movie</span>
          </h1>
        </div>
        <div className="search">
          <input
            value={searchValue}
            onChange={handleInput}
            type="text"
            placeholder="Search"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="links">
          <li><a href="#">Home</a></li>
          <li><a href="#">My List</a></li>
          <button>Sign in</button>
        </div>
      </div>
      {renderSearchResults()}
    </div>
  );
};

export default HomePage;

