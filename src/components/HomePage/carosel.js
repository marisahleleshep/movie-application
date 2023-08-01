import React, { useState, useEffect } from "react";
import { getMovies } from "../../utils/utilities";
import { Carousel } from "react-responsive-carousel";
import './carosel.css';
import ImageContainer from "../../atoms/imageContainer";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Carousels = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);  
  useEffect(() => {
    (async () => {
      setLoading(true);
      const movies = await getMovies();
      setMovies(movies.results);
      setLoading(false);
    })();
  }, []); 

   if (loading) {
    return 
    <h1>Loading movies...</h1>;
  }  
  
  const limit = 4;
  const limitedMovies = movies.slice(0, limit); 
   const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,  
  }; 
  return (
    <div className="slider">
      <Carousel {...sliderSettings}>
        {limitedMovies.map((item) => (
          <div key={item.id} className="slider">
            <ImageContainer props={item} 
            useBackgroundImage={true} />         
             </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Carousels;