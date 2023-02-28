function moveToStart<T>(array: T[], neededElement: T) {
  array = array.filter((item) => item !== neededElement);
  array.unshift(neededElement);
  return array;
}

export default moveToStart;
