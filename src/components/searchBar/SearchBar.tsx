import React from 'react';
import { useCharacters } from '../../context/CharactersContext';

const SearchBar: React.FC = () => {
  const { setSearchTerm, setCurrentPage } = useCharacters();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <input
      type="text"
      placeholder="Search for a character"
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
