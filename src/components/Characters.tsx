import CharacterDetail from './CharacterDetail';
import { useCharacters } from '../context/CharactersContext';
import { Character } from '../interfaces/characters.interface';
import './Characters.style.scss';

const Characters = () => {
  const { characters, loading, error } = useCharacters();

  return (
    <>
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            background: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: '3rem', height: '3rem' }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {error && (
        <div className="alert alert-danger w-25" role="alert">
          Error fetching characters: {error.message}
        </div>
      )}
      <div
        className="table-responsive mx-auto my-3"
        style={{ maxWidth: '90%' }}
      >
        <table className="table table-sm table-bordered">
          <thead>
            <th>Name</th>
            <th>Status</th>
            <th>Species</th>
            <th>Gender</th>
            <th>Location</th>
            <th>Episodes</th>
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
