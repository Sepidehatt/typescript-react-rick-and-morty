import { CharactersProvider } from '../context/CharactersContext';
import Characters from '../components/Characters';
import CharactersPagination from '../components/CharactersPagination';

const HomePage = () => {
  return (
    <CharactersProvider>
      <>
        <Characters />
        <CharactersPagination />
      </>
    </CharactersProvider>
  );
};

export default HomePage;
