import React from 'react';
import { useCharacters } from '../../context/CharactersContext';

const SearchBar: React.FC = () => {
  const { setSearchTerm, setCurrentPage } = useCharacters();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className='col-3'>
      <input
        className="form-control "
            type="text"
            placeholder="Search for a character"
            onChange={handleInputChange}
          />
    </div>
  );
};

export default SearchBar;
