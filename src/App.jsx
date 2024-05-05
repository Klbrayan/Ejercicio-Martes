import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import ArtistList from './ArtistList';
import GenreList from './GenreList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div>
        <h1>Explorador de Música</h1>
        <SearchBar setSearchTerm={setSearchTerm} />
        <Switch>
          <Route path="/artistas">
            <ArtistList searchTerm={searchTerm} />
          </Route>
          <Route path="/generos">
            <GenreList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
