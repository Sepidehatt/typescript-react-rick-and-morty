import { useState, useEffect, useCallback } from 'react';
import { apiServices } from '../services/ApiService';
import { EpisodeResponse } from '../interfaces/episodes.interface';

interface UseEpisodes {
  episodes: EpisodeResponse[];
  loading: boolean;
  error: Error | null;
  loadMore: () => void;
}

const useEpisodes = (episodeUrls: string[]): UseEpisodes => {
  const [episodes, setEpisodes] = useState<EpisodeResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const initialLoadAmount = Math.min(10, episodeUrls.length);
  const [loadAmount, setLoadAmount] = useState<number>(initialLoadAmount);

  useEffect(() => {
    (async () => {
      if (!episodeUrls.length || loadAmount === 0) return;

      setLoading(true);
      setError(null);

      try {
        const urlsToLoad = episodeUrls.slice(0, loadAmount);
        const result: EpisodeResponse[] = await Promise.all(
          urlsToLoad.map((url) => apiServices.getEpisode(url)),
        );
        setEpisodes(result);
      } catch (error: any) {
        setError(error);
        console.error('Error fetching episodes:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, [episodeUrls, loadAmount]);

  const loadMore = useCallback(() => {
    if (loadAmount < episodeUrls.length) {
      const nextLoadAmount = Math.min(loadAmount + 10, episodeUrls.length);
      setLoadAmount(nextLoadAmount);
    }
  }, [loadAmount, episodeUrls.length]);

  return { episodes, loading, error, loadMore };
};

export default useEpisodes;
