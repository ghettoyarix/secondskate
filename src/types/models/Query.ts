import {
  Option,
  SortOption,
  DiscoverOption,
  DiscoverCategory,
  DiscoverType,
} from './FilterOptions';

type queryProps = {
  type: DiscoverType['type'];
  category: DiscoverCategory['category'];
  priceSorter: SortOption['value'];
  condition: Option['value'];
};
export type { queryProps };
