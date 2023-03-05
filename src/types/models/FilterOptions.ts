type DiscoverCategory = {
  title: Title;
  category: string;
};
type DiscoverType = {
  title: Title;
  type: string;
};
type DiscoverOption = DiscoverCategory | DiscoverType;
type TranslatedTitle = {
  eng: string;
  ua: string;
};

type Title = string | TranslatedTitle;

type Option = {
  title: Title;
  value: string;
};

type SortOption = {
  title: Title;
  value: number;
};

export type { DiscoverOption, Option, SortOption, TranslatedTitle };
