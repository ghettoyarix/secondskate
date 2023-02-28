import { CATEGORIES_PARSER } from '../constants';
const chosenLanguage = 'ua';
const parseTitle = (value, parsingArray) => {
  const temp = parsingArray?.find((category) => category.value === value);
  return temp?.title[`${chosenLanguage}`] || temp?.title;
};

const parseBidTitle = (value) => {
  return parseTitle(value, CATEGORIES_PARSER);
};

export { parseBidTitle };
