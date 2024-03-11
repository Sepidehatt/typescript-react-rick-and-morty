import { CharactersProvider } from '../context/CharactersContext';
import Characters from '../components/characters/Characters';
import CharactersPagination from '../components/characters/CharactersPagination';
import SearchBar from '../components/searchBar/SearchBar';
import './Homepage.style.scss';

const HomePage = () => {
  return (
    <CharactersProvider>
      <div className="homepage-banner">
        <h1>RICK & MORTY</h1>
        <SearchBar />
      </div>
      <div className="container characters-content">
        <div className="row">
          <div className="col">
            <Characters />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <CharactersPagination />
          </div>
        </div>
      </div>
    </CharactersProvider>
  );
};

export default HomePage;
