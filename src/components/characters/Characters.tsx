import CharacterDetail from './CharacterDetail';
import { useCharacters } from '../../context/CharactersContext';
import { Character } from '../../interfaces/characters.interface';
import './Characters.style.scss';

const Characters = () => {
  const { characters, loading, error } = useCharacters();

  return (
    <>
      {loading && (
        <div className="spinner-overlay">
          <div
            className="spinner-border text-primary spinner-border-large"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {error && (
        <div className="alert alert-warning mx-5 my-3" role="alert">
          Error fetching characters: {error.message}
        </div>
      )}
      <div
        className="table-responsive mx-auto my-3"
        style={{ maxWidth: '90%' }}
      >
        <table className="table table-sm table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Species</th>
              <th>Gender</th>
              <th>Location</th>
              <th>Episodes</th>
            </tr>
          </thead>
          {characters?.map((character: Character) => (
            <CharacterDetail
              key={character.id + character.name}
              character={character}
            />
          ))}
        </table>
      </div>
    </>
  );
};

export default Characters;
