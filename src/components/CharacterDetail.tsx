import { FC } from 'react';
import { Character } from '../interfaces/characters.interface';

interface CharacterDetailProps {
  character: Character;
}

const CharacterDetail: FC<CharacterDetailProps> = ({ character }) => {
  return (
    <tbody>
      <tr>
        <td className="button-td"></td>
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
