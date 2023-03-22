import {
  Option,
  SortOption,
  DiscoverOption,
  DiscoverCategory,
  DiscoverType,
} from './FilterOptions';

type queryProps = {
  type?: DiscoverType['type'] | undefined;
  category?: DiscoverCategory['category'] | undefined;
  condition?: Option['value'];
  minPrice?: number | null;
  maxPrice?: number | null;
  title?: string | null;
  limit?: number;
  sortBy?: string;
  sortDirection?: number;
};
export type { queryProps };
