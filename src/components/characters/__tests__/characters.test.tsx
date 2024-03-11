/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useCharacters } from '../../../context/CharactersContext';
import Characters from '../Characters';
import { generateCharacter } from './utils/characterSchema';
import { Character } from '../../../interfaces/characters.interface';

vi.mock('../../../context/CharactersContext', () => ({
  useCharacters: vi.fn(),
}));

const mockedUseCharacters = vi.mocked(useCharacters);

const mockCharacters: Character[] = Array.from({ length: 10 }, () =>
  generateCharacter(),
);

describe('Characters Component', () => {
  beforeEach(() => {
    vi.mocked(useCharacters).mockReturnValue({
      loading: false,
      error: null,
      characters: mockCharacters,
      totalPages: 0,
      currentPage: 0,
      setCurrentPage: function (_page: number): void {
        throw new Error('Function not implemented.');
      },
      setSearchTerm: function (_term: string): void {
        throw new Error('Function not implemented.');
      },
    });
  });

  it('renders loading state', () => {
    mockedUseCharacters.mockReturnValue({
      loading: true,
      error: null,
      characters: [],
      totalPages: 0,
      currentPage: 0,
      setCurrentPage: function (_page: number): void {
        throw new Error('Function not implemented.');
      },
      setSearchTerm: function (_term: string): void {
        throw new Error('Function not implemented.');
      },
    });
    render(<Characters />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    mockedUseCharacters.mockReturnValue({
      loading: false,
      error: new Error('Error fetching characters'),
      characters: [],
      totalPages: 0,
      currentPage: 0,
      setCurrentPage: function (_page: number): void {
        throw new Error('Function not implemented.');
      },
      setSearchTerm: function (_term: string): void {
        throw new Error('Function not implemented.');
      },
    });
    render(<Characters />);
    expect(
      screen.getByText('Error fetching characters: Error fetching characters'),
    ).toBeInTheDocument();
  });

  it('renders characters successfully', () => {
    mockedUseCharacters.mockReturnValue({
      loading: false,
      error: null,
      characters: mockCharacters,
      totalPages: 0,
      currentPage: 0,
      setCurrentPage: function (_page: number): void {
        throw new Error('Function not implemented.');
      },
      setSearchTerm: function (_term: string): void {
        throw new Error('Function not implemented.');
      },
    });
    render(<Characters />);

    mockCharacters.forEach((character) => {
      const statusElements = screen.getAllByText(character.status);

      statusElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
      const genderElements = screen.getAllByText(character.gender);

      genderElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
      expect(screen.getByText(character.name)).toBeInTheDocument();
      expect(screen.getByText(character.species)).toBeInTheDocument();
      expect(screen.getByText(character.location.name)).toBeInTheDocument();
    });
  });
});
