import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = React.memo(({ movie }) => {
  return (
    <Card className="mb-4 shadow" style={{ borderRadius: '20px' }}>
      <Card.Img
        variant="top"
        src={movie.thumbnail}
        alt={movie.title}
        loading="lazy"
        style={{ borderRadius: '20px 20px 0 0', height: '30vh', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
      </Card.Body>
    </Card>
  );
});

export default MovieCard;
