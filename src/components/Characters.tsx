import CharacterDetail from './CharacterDetail';
import { useCharacters } from '../context/CharactersContext';
import { Character } from '../interfaces/characters.interface';
import './Characters.style.scss';

const Characters = () => {
  const { characters, loading, error } = useCharacters();

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching characters: {error.message}</p>}
      <div className="table-responsive mx-auto my-3" style={{ maxWidth: '90%' }}> 
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
