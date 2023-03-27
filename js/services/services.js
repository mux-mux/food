//arrow function when context does not matter
const postData = async (url, data) => {
  //fetch returns object -> fetch(url).then(succCallBackFn, failureCallBackFn);
  //await waits for result returned
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: data,
  });
  //If no awaits -> go further without waiting result
  //await bcs could be huge response body and it`ll take time to handel it
  return await res.json();
};

const getResource = async (url) => {
  const res = await fetch(url);
  //fetch only OK when status 200-299
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
};

export { postData };
export { getResource };
