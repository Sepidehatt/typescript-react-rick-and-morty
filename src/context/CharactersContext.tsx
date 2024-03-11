import { createContext, useState, useContext, ReactNode } from 'react';
import useFetchCharacters from '../hooks/useFetchCharacters';
import { Character } from '../interfaces/characters.interface';

interface CharactersContext {
  characters: Character[];
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  setSearchTerm: (term: string) => void;
  loading: boolean;
  error: Error | null;
}

const CharactersContext = createContext<CharactersContext | undefined>(
  undefined,
);

interface CharactersProviderProps {
  children: ReactNode;
}

export const CharactersProvider: React.FC<CharactersProviderProps> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { characters, totalPages, loading, error } = useFetchCharacters({
    searchTerm,
    currentPage,
  });

  const value = {
    characters,
    totalPages,
    currentPage,
    setCurrentPage,
    setSearchTerm,
    loading,
    error,
  };

  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = (): CharactersContext => {
  const context = useContext(CharactersContext);
  if (context === undefined) {
    throw new Error('useCharacters must be used within a CharactersProvider');
  }
  return context;
};
