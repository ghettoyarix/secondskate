import { Option, TranslatedTitle } from 'types/models/FilterOptions';
import { CATEGORIES_PARSER } from '../constants';
const chosenLanguage: 'ua' | 'eng' = 'eng';
const parseTitle = (value: string, parsingArray: Option[]) => {
  const temp = parsingArray?.find((category) => category.value === value);
  if (typeof temp?.title === 'string') {
    return temp.title;
  } else return temp?.title[chosenLanguage];
};

const parseBidTitle = (value: string) => {
  return parseTitle(value, CATEGORIES_PARSER);
};

export { parseBidTitle, chosenLanguage };
