const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'X-Access-Key':
        '$2b$10$wh.K0go7oYuH93pP1amFBupx4yjy0VcOnlcWDM.Oh9CT4o1QxvuFq',
    },
    body: data,
  });
  return await res.json();
};

const getResource = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'X-Access-Key':
        '$2b$10$wh.K0go7oYuH93pP1amFBupx4yjy0VcOnlcWDM.Oh9CT4o1QxvuFq',
      'X-JSON-Path': '$.menu[*]',
    },
  });
  return await res.json();
};

export { postData };
export { getResource };
