import { useRef } from 'react';
import useEpisodes from '../hooks/useEpisode';
import { useCharacterDetails } from '../hooks/useCharacterDetail';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import CharacterInfo from './CharacterInfo';
import EpisodesList from './EpisodesList';
import { CharacterProps } from '../interfaces/characters.interface';

const NestedTableDetail: React.FC<CharacterProps> = ({ character }) => {
  const { episodes, loadMore, loading } = useEpisodes(character.episode);
  const lastEpisodeElementRef = useRef(null);
  const characterDetails = useCharacterDetails(character);

  useIntersectionObserver(lastEpisodeElementRef, loadMore, !loading);

  if (!character) return null;

  return (
    <tr>
      <td colSpan={6}>
        <div className="row px-md-4 my-3" style={{ maxWidth: '95%' }}>
          <CharacterInfo
            character={character}
            characterDetails={characterDetails}
          />
          <EpisodesList
            episodes={episodes}
            loading={loading}
            lastEpisodeElementRef={lastEpisodeElementRef}
          />
        </div>
      </td>
    </tr>
  );
};

export default NestedTableDetail;
