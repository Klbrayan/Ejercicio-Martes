import React from 'react';

const ArtistCard = ({ artist }) => {
  return (
    <div>
      <img src={artist.image} alt={artist.name} />
      <h3>{artist.name}</h3>
      <p>{artist.bio}</p>
      <ul>
        {artist.hits.map((hit, index) => (
          <li key={index}>{hit}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArtistCard;
