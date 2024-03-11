import React from 'react';
import { EpisodeResponse } from '../../interfaces/episodes.interface';

interface EpisodeDetailProps {
  index: number;
  episode: EpisodeResponse;
  episodes: EpisodeResponse[];
  lastEpisodeElementRef:
    | React.RefObject<HTMLTableRowElement>
    | ((instance: HTMLTableRowElement | null) => void)
    | null;
}

const EpisodeDetail: React.FC<EpisodeDetailProps> = ({
  episode,
  index,
  episodes,
  lastEpisodeElementRef,
}) => {
  // to extract season and episode numbers
  const match = episode.episode.match(/S(\d+)E(\d+)/);
  const isLastElement = index === episodes.length - 1;

  if (!match) return null;

  return (
    <tr ref={isLastElement ? lastEpisodeElementRef : null}>
      <td>{episode.name}</td>
      <td>{parseInt(match[1], 10)}</td>
      <td>{parseInt(match[2], 10)}</td>
    </tr>
  );
};

export default EpisodeDetail;
