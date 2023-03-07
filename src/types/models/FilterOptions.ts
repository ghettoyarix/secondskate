interface DiscoverCategory {
  title: Title;
  category: string;
}

interface DiscoverType {
  title: Title;
  type: string;
}

interface DiscoverOption extends Partial<DiscoverCategory>, Partial<DiscoverType> {}
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

export type {
  DiscoverOption,
  Option,
  SortOption,
  TranslatedTitle,
  Title,
  DiscoverType,
  DiscoverCategory,
};
