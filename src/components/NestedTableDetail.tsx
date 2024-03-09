import { useCallback, useRef } from 'react';
import useEpisodes from '../hooks/useEpisode';
import { CharacterProps } from '../interfaces/characters.interface';
import { EpisodeResponse } from '../interfaces/episodes.interface';
import EpisodeDetail from './EpisodeDetail';

const NestedTableDetail: React.FC<CharacterProps> = ({ character }) => {
  const { episodes, loadMore, loading } = useEpisodes(character.episode);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastEpisodeElementRef = useCallback(
    (node: Element | null) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, loadMore],
  );

  if (!character) return null;
  return (
    <tr>
      <td style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <img src={character.image} alt={character.name} />
        </div>
        <div>
          <span>{character.name}</span>
          <ul>
            <li>{character.gender}</li>
            <li>{character.status}</li>
            <li>{character.species}</li>
            <li>{character.origin.name}</li>
            <li>{character.location.name}</li>
          </ul>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Season</th>
              <th>Episode</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode, index) => (
              <EpisodeDetail
                key={episode.name + episode.episode}
                episode={episode as EpisodeResponse}
                index={index}
                episodes={episodes as EpisodeResponse[]}
                lastEpisodeElementRef={lastEpisodeElementRef}
              />
            ))}
            {loading && (
              <tr>
                <td>Loading more episodes...</td>
              </tr>
            )}
          </tbody>
        </table>
      </td>
    </tr>
  );
};

export default NestedTableDetail;
