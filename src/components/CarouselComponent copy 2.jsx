import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import { MovieContext } from '../context/MovieContext';

const CarouselComponent = () => {
  const { movies } = useContext(MovieContext);

  const carouselMovies = movies.slice(0, 5);

  return (
    <Carousel fade className="mt-4">
      {carouselMovies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100"
            src={movie.thumbnail}
            alt={movie.title}
            style={{ maxHeight: '500px', objectFit: 'cover' }}
            loading="lazy"
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
