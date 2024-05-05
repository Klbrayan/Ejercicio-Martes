import React from 'react';
import GenreCard from './GenreCard';

const GenreList = () => {
  const genres = [
    { name: 'Rock', image: '../public/rock.avif', description: 'El rock es un género musical que se originó en los Estados Unidos en la década de 1950 como una fusión de la música Country y el Rhythm and Blues1. Es reconocido por la predominancia de la guitarra eléctrica, con canciones de compás 4/4 y una estructura de verso-estribillo1. Las temáticas de sus canciones suelen ser sociales, políticas, y también sobre el amor y la emoción1.El rock ha evolucionado a lo largo de las décadas y ha dado lugar a diversos subgéneros. Ha servido como representación y espíritu a diversos colectivos urbanos o “tribus”, e incluso a movimientos sociales de distinta naturaleza1.' },
    { name: 'Pop', image: '../public/pop.jpg', description: 'La música pop, también conocida simplemente como pop, es un género de música popular que tuvo su origen a finales de los años 19501. Se originó como una derivación del pop tradicional, en combinación con otros géneros musicales que estaban de moda en aquel momento1.Las características esenciales que definen al pop son12:' },
    { name: 'Bachata', image: '../public/bachata.webp', description: 'La bachata es un género musical bailable originario de la República Dominicana, dentro de lo que se denomina folclore urbano. Está considerado como un derivado del bolero rítmico1. En la ejecución de la bachata tradicional, las maracas del bolero fueron sustituidas por la güira, se asumió la ejecución virtuosa y libre del bongó propia del son cubano y se incorporaron guitarras al estilo de los tríos latinoamericanos populares en Cuba y Puerto Rico1.' },
    { name: 'Regueton', image: '../public/regueton.jpg', description: 'El reguetón​ ​ es un género musical​ que derivó del reggae en español que es a su vez un subgénero del dancehall e incluye elementos del hip hop. Es un género musical muy popular; que alcanzó su apogeo máximos durante las décadas de 2000 y 2010.​​' },
    { name: 'Trap', image: '../public/trap.jfif', description: 'El trap es un subgénero musical del hip hop que se originó en el sur de los Estados Unidos en la década de los 90. Es una mezcla de varios géneros, como el rap, el crunk, el snap, el southern hip hop, el memphis rap, el electro, el miami bass, la música electrónica y el bounce. Se caracteriza por el uso de ritmos electrónicos y la combinación de instrumentos como el sintetizador y la caja de ritmos. Las letras del trap se centran en temas como el dinero, las drogas y el sexo, en un contexto urbano y de calle.' },

   
  ];

  return (
    <div>
      <h2>Géneros</h2>
      {genres.map(genre => (
        <GenreCard key={genre.name} genre={genre.name} image={genre.image} description={genre.description} />
      ))}
    </div>
  );
}

export default GenreList;
