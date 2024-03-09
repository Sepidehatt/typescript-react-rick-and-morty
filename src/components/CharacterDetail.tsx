import { FC } from 'react';
import useOpenController from '../hooks/useOpenController';
import { Character } from '../interfaces/characters.interface';
import { ExpendableButton } from './Buttons/ExpandableButton';

interface CharacterDetailProps {
  character: Character;
}

const CharacterDetail: FC<CharacterDetailProps> = ({ character }) => {
  const { isOpen, toggle } = useOpenController (false);

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
    </tbody>
  );
};

export default CharacterDetail;
