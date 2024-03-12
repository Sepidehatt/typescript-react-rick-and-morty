import { CharacterDetailsTitle } from '../interfaces/characterdetails.interface';
import { Character } from '../interfaces/characters.interface';

export const useCharacterDetails = (
  character: Character,
): CharacterDetailsTitle[] => {
  return [
    { label: 'Gender', value: character.gender, emoji: '👤' },
    { label: 'Status', value: character.status, emoji: '💓' },
    { label: 'Species', value: character.species, emoji: '🧬' },
    { label: 'Origin', value: character.origin.name, emoji: '🌍' },
    { label: 'Location', value: character.location.name, emoji: '📍' },
  ];
};
