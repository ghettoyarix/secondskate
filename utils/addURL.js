const addURL = async (URL, productId) => {
  await fetch(`http://${process.env.NEXT_PUBLIC_API_URL}/api/addURL/${productId}`, {
    method: 'POST',
    body: JSON.stringify(URL),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });
};
export default addURL;
