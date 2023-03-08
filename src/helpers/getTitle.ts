import type { Title } from 'types/models/FilterOptions';
function getTitle(obj: any, chosenLanguage: 'ua' | 'eng') {
  let result;

  if (typeof obj?.title === 'string') {
    result = obj.title;
  } else {
    if (typeof obj === 'string') {
      result = obj;
    } else {
      result = obj?.title[chosenLanguage];
    }
  }

  return result;
}
export default getTitle;
