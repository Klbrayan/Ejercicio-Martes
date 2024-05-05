import React from 'react';

const GenreCard = ({ genre, image, description }) => {
  return (
    <div>
      <img src={image} alt={genre} />
      <h2>{genre}</h2>
      <p>{description}</p>
    </div>
  );
}

export default GenreCard;
