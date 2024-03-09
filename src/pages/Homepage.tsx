import { CharactersProvider } from '../context/CharactersContext';
import Characters from '../components/Characters';
import CharactersPagination from '../components/CharactersPagination';
import SearchBar from '../components/searchBar/SearchBar';

const HomePage = () => {
  return (
    <CharactersProvider>
      <>
        <SearchBar />
        <Characters />
        <CharactersPagination />
      </>
    </CharactersProvider>
  );
};

export default HomePage;
