import React from 'react';
import EpisodeDetail from './EpisodeDetail';
import { EpisodeResponse } from '../../interfaces/episodes.interface';
import './episodes.style.scss';

interface EpisodesListProps {
  episodes: EpisodeResponse[];
  loading: boolean;
  lastEpisodeElementRef:
    | React.RefObject<HTMLTableRowElement>
    | ((instance: HTMLTableRowElement | null) => void)
    | null;
}

const EpisodesList: React.FC<EpisodesListProps> = ({
  episodes,
  loading,
  lastEpisodeElementRef,
}) => {
  return (
    <div className="col-md-6 ps-4">
      <div
        className="table-responsive"
        style={{ overflowY: 'auto', maxHeight: '250px' }}
      >
        <table
          className="table table-sm table-striped mx-auto my-3"
          style={{ tableLayout: 'fixed' }}
        >
          <thead className="sticky-top-th">
            <tr>
              <th className="w-50">Name</th>
              <th>Season</th>
              <th>Episode</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode, index) => (
              <EpisodeDetail
                key={episode.name + episode.episode}
                episode={episode}
                index={index}
                episodes={episodes}
                lastEpisodeElementRef={lastEpisodeElementRef}
              />
            ))}
            {loading && (
              <tr>
                <td colSpan={3}>Loading more episodes...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EpisodesList;
