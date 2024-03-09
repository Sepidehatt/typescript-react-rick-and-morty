import { FC } from 'react';
import useOpenController from '../hooks/useOpenController';
import NestedTableDetail from './NestedTableDetail';
import { ExpendableButton } from './buttons/ExpandableButton';
import { CharacterProps } from '../interfaces/characters.interface';

const CharacterDetail: FC<CharacterProps> = ({ character }) => {
  const { isOpen, toggle } = useOpenController(false);

  return (
    <tbody>
      <tr>
        <td className="button-td">
          <ExpendableButton isOpen={isOpen} toggle={toggle} />
        </td>
        <td>{character.name}</td>
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
