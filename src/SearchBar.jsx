// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Buscar artista..." 
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
