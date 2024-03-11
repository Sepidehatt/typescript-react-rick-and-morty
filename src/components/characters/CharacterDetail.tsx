import useOpenController from '../../hooks/useOpenController';
import NestedTableDetail from './NestedTableDetail';
import { CharacterProps } from '../../interfaces/characters.interface';

const CharacterDetail: React.FC<CharacterProps> = ({ character }) => {
  const { isOpen, toggle } = useOpenController(false);

  return (
    <tbody>
      <tr onClick={toggle} style={{ cursor: 'pointer' }}>
        <td className="align-middle">
          <span
            className="material-symbols-outlined d-inline-block"
            style={{
              transform: `rotate(${isOpen ? 180 : 0}deg)`,
              transition: 'all 0.25s',
              verticalAlign: 'middle',
            }}
          >
            expand_more
          </span>
          <span className="d-inline-block" style={{ verticalAlign: 'middle' }}>
            {character.name}
          </span>
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
