import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { apiServices } from '../services/ApiService';
import {
  Character,
  CharacterQueryParams,
  CharacterResponse,
} from '../interfaces/characters.interface';

interface FetchCharactersParams {
  searchTerm?: string;
  currentPage: number;
}

const useFetchCharacters = ({
  searchTerm,
  currentPage,
}: FetchCharactersParams) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchCharacters = async () => {
    setLoading(true);
    setError(null);
    try {
      const query: CharacterQueryParams = {
        page: searchTerm ? 1 : currentPage,
        name: searchTerm || '',
      };

      const response: CharacterResponse =
        await apiServices.getCharacters(query);

      setCharacters(response.results || []);
      setTotalPages(response.info?.pages || 0);
    } catch (error) {
      console.error('Failed to fetch characters:', error);

      if ((error as any).status === 404) {
        setError(new Error('Character not found'));
      } else {
        setError(
          error instanceof Error ? error : new Error('An error occurred'),
        );
      }
      setCharacters([]);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debouncedFetch = debounce(fetchCharacters, 500);
    debouncedFetch();

    return () => debouncedFetch.cancel();
  }, [searchTerm, currentPage]);

  return { characters, totalPages, loading, error };
};

export default useFetchCharacters;
