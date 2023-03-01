const clearProps = (obj: { [key: string]: any }): void => {
  Object.keys(obj).forEach((key: string) => {
    if (
      obj[key] === 'undefined' ||
      obj[key] === undefined ||
      obj[key] === 'any' ||
      obj[key] === null
    ) {
      delete obj[key];
    }
  });
};
export default clearProps;
