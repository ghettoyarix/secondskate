import { DiscoverOption } from 'types/models/FilterOptions';

const discoverCategories: DiscoverOption[] = [
  { title: 'All items', category: 'any' },
  { title: 'Completes', type: 'completes' },
  { title: 'Decks', type: 'decks' },
  { title: 'Trucks', type: 'trucks' },
  { title: 'Wheels', type: 'wheels' },
  { title: 'Other', type: 'other' },
  { title: 'Shoes', category: 'shoes' },
];

export { discoverCategories };
