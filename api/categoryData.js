import client from '../utils/client';

const endpoint = client.databaseURL;

const getCategorys = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/category.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getCategorys;
