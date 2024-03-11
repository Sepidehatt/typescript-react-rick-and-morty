import useOpenController from '../../hooks/useOpenController';
import NestedTableDetail from './NestedTableDetail';
import { CharacterProps } from '../../interfaces/characters.interface';

const CharacterDetail: React.FC<CharacterProps> = ({ character }) => {
  const { isOpen, toggle } = useOpenController(false);

  return (
    <tbody>
      <tr onClick={toggle} style={{ cursor: 'pointer' }}>
        <td>
          <span
            className="material-symbols-outlined"
            style={{
              transform: `rotate(${isOpen ? 180 : 0}deg)`,
              transition: 'all 0.25s',
            }}
          >
            expand_more
          </span>
          {character.name}
        </td>
        <td>{character.status}</td>
        <td>{character.species}</td>
        <td>{character.gender}</td>
        <td>{character.location?.name}</td>
        <td>{character.episode?.length}</td>
      </tr>
      {isOpen && <NestedTableDetail character={character} />}
    </tbody>
  );
};

export default CharacterDetail;
