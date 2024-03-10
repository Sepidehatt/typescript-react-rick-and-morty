import React from 'react';
import { useCharacters } from '../context/CharactersContext';
import GenericButton from './buttons/GenericButton.tsx';

const CharactersPagination: React.FC = () => {
  const { totalPages, setCurrentPage, currentPage } = useCharacters();

  const handlePreviousPage = (): void => {
    setCurrentPage(Math.max(1, currentPage - 1));
  };

  const handleNextPage = (): void => {
    setCurrentPage(Math.min(totalPages, currentPage + 1));
  };

  return (
    <div className="mb-5">
      <GenericButton
        label={
          <span className="material-symbols-outlined">arrow_back_ios</span>
        }
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
      />
      <span>
        {currentPage} of {totalPages}{' '}
      </span>
      <GenericButton
        label={
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        }
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
      />
    </div>
  );
};

export default CharactersPagination;
