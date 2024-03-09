import Characters from '../components/Characters';
import { CharactersProvider } from '../context/CharactersContext';

const HomePage = () => {
  return (
    <CharactersProvider>
      <Characters />
    </CharactersProvider>
  );
};

export default HomePage;
