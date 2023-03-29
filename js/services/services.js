//post async(where, what) res=await fetch(where, {method: headers: body: what}) return await res.json()
//get async(where) res=await fetch(where) if !res.ok throw new Error return await res.json()
//async await could be .then(res.json)
//Export

const postData = async (url, data) => {
  //fetch(url, [options]-method,headers...-without just get)
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: data,
  });
  //If no awaits -> go further without waiting result
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
