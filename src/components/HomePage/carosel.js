// import React, { useState, useEffect } from "react";
// import { getMovies } from "../../utils/utilities";
// import { Carousel } from "react-responsive-carousel";
// import './carosel.css';
// import ImageContainer from "../../atoms/imageContainer";
// import "react-responsive-carousel/lib/styles/carousel.min.css";



// const Carousels = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);  
//   useEffect(() => {
//     (async () => {
//       setLoading(true);
//       const movies = await getMovies();
//       setMovies(movies.results);
//       setLoading(false);
//     })();
//   }, []); 

//    if (loading) {
//     return 
//     <h1>Loading movies...</h1>;
//   }  
  
//   const limit = 4;
//   const limitedMovies = movies.slice(0, limit); 
//    const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 1,  
//   }; 
//   return (
//     <div className="slider">
//       <Carousel {...sliderSettings}>
//         {limitedMovies.map((item) => (
//           <div key={item.id} className="slider">
//             <ImageContainer props={item} 
//             useBackgroundImage={true} />         
//              </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };
// export default Carousels;



import React, { useState, useEffect } from "react";
import { getMovies } from "../../utils/utilities";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carosel.css';
import './style.css';
import ImageContainer from "../../atoms/imageContainer";


const Carousels = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const moviesResponse = await getMovies();
        setMovies(moviesResponse.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []); 

  if (loading) {
    return <h1>Loading movies...</h1>;
  }  

  const limit = 10;
  const limitedMovies = movies.slice(0, limit); 
  const sliderSettings = {
    showArrows: true,
    showStatus: false,
    infiniteLoop: true,
    showThumbs: false,
    autoPlay: true,
    interval: 2000,
    transitionTime: 800,
  }; 

  return (
    <div className="slider">
      <Carousel {...sliderSettings}>
        {limitedMovies.map((item) => (
          <div key={item.id} className="slider-item">
            <ImageContainer props={item} useBackgroundImage={true} />  
            <div className="items">
            <h3 className="title">{item.title}</h3>  
            <p>{item.overview}</p>    
            <button>Watch Now</button> 
            <button>Add To Favourite</button>
          </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Carousels;
