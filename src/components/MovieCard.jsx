import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = React.memo(({ movie }) => {
  return (
    <Card style={{ width: '100%', height: '60vh', borderRadius: '20px', marginRight: '20px' }} className="mb-4 shadow">
      <Card.Img style={{ borderRadius: '20px 20px 0 0' }}
        variant="top"
        src={movie.thumbnail}
        alt={movie.title}
        loading="lazy"
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
      </Card.Body>
    </Card>
  );
});

export default MovieCard; 
