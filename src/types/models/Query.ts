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
  priceSorter?: SortOption['value'];
  condition?: Option['value'];
  minPrice?: number | null;
  maxPrice?: number | null;
};
export type { queryProps };
