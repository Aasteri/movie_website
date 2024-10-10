import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MovieContext } from '../context/MovieContext';
import MovieCard from './MovieCard';

const TrendingMovies = () => {
  const { movies } = useContext(MovieContext);

  return (
    <Container id="trending" className="my-5">
      <h2 className="mb-4 text-center">Trending Now</h2>
      <Row>
        {movies.slice(0, 10).map(movie => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrendingMovies; 
