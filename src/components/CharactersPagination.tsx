import React from 'react';
import { useCharacters } from '../context/CharactersContext';
import GenericButton from './buttons/GenericButton';

const CharactersPagination: React.FC = () => {
  const { totalPages, setCurrentPage, currentPage } = useCharacters();

  const handlePreviousPage = (): void => {
    setCurrentPage(Math.max(1, currentPage - 1));
  };

  const handleNextPage = (): void => {
    setCurrentPage(Math.min(totalPages, currentPage + 1));
  };

  return (
    <div>
      <GenericButton
        label="Previous"
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
      />
      <span>
        {' '}
        Page {currentPage} of {totalPages}{' '}
      </span>
      <GenericButton
        label="Next"
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
      />
    </div>
  );
};

export default CharactersPagination;
