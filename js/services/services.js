//post async(where, what) res=await fetch(where, {method: headers: body: what}) return await res.json()
//get async(where) res=await fetch(where) if !res.ok throw new Error return await res.json()
//async await could be .then(res.json)
//Export

const postData = async (url, data) => {
  //fetch(url, [options]-method,headers...-without just get)
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'X-Access-Key': '$2b$10$wh.K0go7oYuH93pP1amFBupx4yjy0VcOnlcWDM.Oh9CT4o1QxvuFq',
    },
    body: data,
  });
  //If no awaits -> go further without waiting result
  return await res.json();
};

const getResource = async (url) => {
  //fetch(url, [options]-method,headers...-without just get)
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'X-Access-Key': '$2b$10$wh.K0go7oYuH93pP1amFBupx4yjy0VcOnlcWDM.Oh9CT4o1QxvuFq',
      'X-JSON-Path': '$.menu[*]',
    },
  });
  //If no awaits -> go further without waiting result
  return await res.json();
};

export { postData };
export { getResource };
