import React from 'react';
import { Character } from '../interfaces/characters.interface';

interface CharacterInfoProps {
  character: Character;
  characterDetails: {
    label: string;
    value: string;
    emoji: string;
  }[];
}

const CharacterInfo: React.FC<CharacterInfoProps> = ({ character, characterDetails }) => {
  return (
    <div className="col-md-6 d-flex align-items-center">
      <div className="me-3">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="flex-grow-1 ms-3">
        <h4 className="mb-3">{character.name}</h4>
        <div>
          {characterDetails.map((detail, index) => (
            <div key={index} className="mb-1">
              <strong>{detail.emoji} {detail.label}:</strong> {detail.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
