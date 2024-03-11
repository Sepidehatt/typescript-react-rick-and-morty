import { faker } from '@faker-js/faker';
import { Character } from '../../../../interfaces/characters.interface';

export const generateCharacter = (): Character => ({
  id: faker.datatype.number(),
  name: faker.name.fullName(),
  status: faker.helpers.arrayElement(['Alive', 'Dead', 'unknown']),
  species: faker.random.word(),
  type: faker.random.word(),
  gender: faker.helpers.arrayElement([
    'Male',
    'Female',
    'Genderless',
    'unknown',
  ]),
  location: {
    name: faker.address.cityName(),
    url: faker.internet.url(),
  },
  origin: {
    name: faker.address.cityName(),
    url: faker.internet.url(),
  },
  image: faker.internet.url(),
  episode: Array.from(
    { length: faker.datatype.number({ min: 1, max: 5 }) },
    () => faker.internet.url(),
  ),
  url: faker.internet.url(),
  created: faker.date.past().toISOString(),
});
