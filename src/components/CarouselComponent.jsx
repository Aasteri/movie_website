import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import { MovieContext } from '../context/MovieContext';
import Lottie from 'react-lottie';
import movieAnimation from '../Lottie/movie-animation.json';


const CarouselComponent = () => {
  const { movies } = useContext(MovieContext);
  const carouselMovies = movies.slice(0, 5); 

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: movieAnimation, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="hero-section">
      {/* Background Carousel */}
      <Carousel fade controls={false} indicators={false} className="background-carousel">
        {carouselMovies.map((movie) => (
          <Carousel.Item key={movie.id} className="carousel-item">
            <img
              className="d-block w-100"
              src={movie.thumbnail}
              alt={movie.title}
              style={{ height: '80vh', objectFit: 'cover' }} 
              loading="lazy"
            />

            {/* Foreground Content */}
            <div className="foreground-content">
              <div className="container">
                <div className="row align-items-center">
                  {/* Left Side: Movie Title and Description */}
                  <div className="col-md-6 text-section">
                    <h1 className="hero-title">Stream the Latest Movies</h1>
                    <p className="hero-description">
                      Explore top trending movies and shows right here. Watch now and stay entertained.
                    </p>
                  </div>

                  {/* Right Side: Lottie Animation */}
                  <div className="col-md-6 lottie-section">
                    <Lottie options={defaultOptions} height={400} width={400} />
                  </div>
                </div>
              </div>
            </div>

            {/* Overlay */}
            <div className="carousel-overlay" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
