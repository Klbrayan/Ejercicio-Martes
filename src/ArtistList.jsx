import React, { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';

const ArtistList = ({ searchTerm }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const artistsData = [
      { id: 1, name: 'Romeo Santos', image: '../public/romeo.jpg', bio: 'Romeo Santos, cuyo nombre real es Anthony Romeo Santos, es un cantante, compositor y exvocalista de la agrupación musical Aventura. Nació el 21 de julio de 1981 en el Bronx, Nueva York, Estados Unidos12. A continuación, te presento algunos aspectos destacados de su vida y carrera:', hits: ['Ella y yo', 'Sobredosis'] },
      { id: 2, name: 'Bad Bunny', image: '../public/bad bunny.jpg', bio: 'Benito Antonio Martínez Ocasio, conocido artísticamente como Bad Bunny, es un cantante, compositor, productor musical y peleador aficionado de lucha libre puertorriqueño. Nació el 10 de marzo de 1994 en Vega Baja, Puerto Rico1. Su música abarca varios géneros, incluyendo reguetón, trap latino y baladas. Aunque se caracteriza por su entonación grave y su estilo de vestir, también ha interpretado otros estilos variados.', hits: ['La cancion', 'Vuelven'] },
      { id: 3, name: 'Karol G', image: '../public/karol g.jfif', bio: 'Carolina Giraldo Navarro, conocida artísticamente como Karol G, es una cantante, compositora, actriz, productora y empresaria colombiana. Su trayectoria se ha destacado principalmente por emplear los géneros de reguetón y pop urbano, aunque también ha incursionado con otros estilos musicales urbanos y latinoamericanos.', hits: ['Ahora me llamas', 'Amargura'] },
      { id: 4, name: 'Beethoven', image: '../public/beethoven.jfif', bio: 'Ludwig van Beethoven nació en Bonn, Alemania, el 16 de diciembre de 1770. A lo largo de su vida, se trasladó a Viena, donde vivió hasta su muerte en 1827. Beethoven fue un compositor y pianista famoso por sus sinfonías y otras obras. A pesar de su sordera, dejó un legado duradero en la música clásica', hits: ['Everything I Do', '9 Acapella'] },
      { id: 5, name: 'Nicki Nicole', image: '../public/nicki.jfif', bio: 'Nicole Denise Cucco (Rosario, Santa Fe; 25 de agosto de 2000), conocida artísticamente como Nicki Nicole, es una cantante y compositora argentina.En 2019, saltó a la fama con el sencillo «Wapo traketero», logrando obtener millones de reproducciones en YouTube en un corto período de tiempo después de ser publicado. La canción se convirtió en un fenómeno viral, logrando ingresar al listado Argentina Hot 100 de Billboard.1​2​3​ En agosto de ese mismo año terminó ganando más reconocimiento a nivel nacional e internacional con la publicación de su Music Session junto al productor Bizarrap. En noviembre de ese año, lanzó su primer álbum de estudio Recuerdos, con canciones como «Años luz», «Shorty», «Plegarias», entre otras.', hits: ['Ojos verdes', 'Paz'] },
      { id: 6, name: 'Peso Pluma', image: '../public/peso.jfif', bio: 'Hassan Emilio Kabande Laija (Zapopan, Jalisco; 15 de junio de 1999), conocido como Peso Pluma, es un cantante y compositor mexicano. Se especializa en los géneros de corridos tumbados, reguetón y trap latino.1​2​Su fama internacional comenzó en 2022, después de colaborar con cantantes como Luis R. Conriquez, Natanael Cano y Eslabón Armado.3​ Su estilo musical se caracteriza por un toque acústico con influencias de la música urbana como el trap mezclados con el sonido de los corridos.4​ Su álbum de estudio debut Ah y qué? fue lanzado en 2020 y el segundo Efectos secundarios se publicó en 2021. Algunos de sus éxitos son «El Belicón», «Siempre pendientes», «PRC», «Por las noches», «AMG», «Ella baila sola» y «La bebé (Remix)».5​ Debido a su fama ha logrado colaborar también con artistas de éxito internacional como Becky G,6​ Nicki Nicole,7​ Marshmello,8​ Eladio Carrión, Bizarrap y Karol G.', hits: ['BYE', 'Ojos azules'] },
      { id: 7, name: 'Don Omar', image: '../public/don omar.jfif', bio: 'William Omar Landrón Rivera (San Juan, Puerto Rico; 10 de febrero de 1978), más conocido por su nombre artístico Don Omar, es un cantante, rapero, compositor, productor musical, empresario, y actor puertorriqueño.10​11​12​13​14​15​ Es considerado como el «rey del reguetón», tanto por críticos y fanáticos de la música.4​16​17​ Ha incursionado en diferentes géneros musicales tales como la salsa, la bachata, el merengue, la balada, entre otros.3​18​19​20​ Parte de su éxito, reside en haber dado a conocer el reguetón en diferentes lugares del mundo,21​22​ siendo además uno de los exponentes más significativos e influyentes en la historia de dicho género musical.23​24​25', hits: ['Ella y yo', 'Dile'] },
      { id: 8, name: 'Arcangel', image: '../public/arcangel.jfif', bio: 'Austin Agustín Santos (Harlem del Este, 23 de diciembre de 1985),2​ más conocido por su nombre artístico Arcángel, es un cantante y compositor estadounidense. También es conocido por haber comenzado su carrera artística formando parte del dúo Arcángel & De la Ghetto.3​ En 2023 la revista Rolling Stone lo describió como «uno de los artistas más influyentes del género urbano».4​ Ese mismo año la revista Billboard lo colocó en su lista de 50 mejores raperos de la historia de la música latina.5', hits: ['Jumpa', 'Por amar a ciegas'] },
      { id: 9, name: 'J Balvin', image: '../public/j balvin.webq', bio: 'José Álvaro Osorio Balvín (Medellín, Antioquia; 7 de mayo de 1985), más conocido como J Balvin, es un cantante y productor colombiano, reconocido como uno de los artistas latinos más vendidos del mundo, con ventas de treinta y cinco millones de álbumes y sencillos a nivel mundial.2​3​4​ Ha logrado posicionarse tanto en el mercado musical hispano como en el mercado musical de habla inglesa, llegando a colocar sus canciones en número uno en varias listas musicales, entre ellas Billboard.5​6​7​8​', hits: ['Rojo', 'Amarillo'] },
      { id: 10, name: 'Piso 21', image: '../public/piso 21.jfif', bio: 'Piso 21 es una banda colombiana de pop, formada en Medellín, Colombia, en 2007 por David Escobar (Dim), Juan David Huertas (El Profe), Juan David Castaño (El Llanero), y Pablo Mejía (Pablito); varios años después, con la salida de Castaño, se incorporó David Hernández (Lorduy). En 2011 Piso 21 aparece en la escena musical con el estreno de una serie canciones con un toque romántico; pero es al año siguiente cuando realizan el lanzamiento oficial de su álbum debut, con el mismo título de la agrupación.', hits: ['Déjala que vuelva', 'Te vi '] },
      { id: 11, name: 'Paulo Londra', image: '../public/paulo.jfif', bio: 'Paulo Londra nació en Córdoba, Argentina, el 12 de abril de 1998.4​ Hijo de un padre gendarme, y de una madre ama de casa, Paulo nunca tuvo ningún estímulo musical hasta que a los 13 años vio la película Ocho millas, protagonizada por el rapero Eminem, gracias a una recomendación de su hermana, que lo integró por completo en el mundo del rap y el hip-hop.5​', hits: ['Plan A', 'Chance'] },

      // Agrega aquí los demás artistas
    ];

    setArtists(artistsData);
  }, [searchTerm]);

  return (
    <div>
      <h2>Artistas</h2>
      {artists.map(artist => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
}

export default ArtistList;
