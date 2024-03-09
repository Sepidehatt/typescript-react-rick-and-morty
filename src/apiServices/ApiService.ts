import { fetchClient } from './../serviceClient/FetchClient';
import { CharacterQueryParams, CharacterResponse } from '../interfaces/characters.interface';
import { EpisodeResponse } from '../interfaces/episodes.interface';

interface ApiServices {
  getCharacters: (query: CharacterQueryParams) => Promise<CharacterResponse>;
  getEpisode: (url: string) => Promise<EpisodeResponse>;
}

const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

export const apiServices: ApiServices = {
  getCharacters: async (query: CharacterQueryParams): Promise<CharacterResponse> => {
    try {
      const url: string = `${baseUrl}/character/?page=${query.page}&name=${query.name}`;
      return await fetchClient.get<CharacterResponse>(url);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getEpisode: async (url: string): Promise<EpisodeResponse> => {
    try {
      return await fetchClient.get<EpisodeResponse>(url);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};