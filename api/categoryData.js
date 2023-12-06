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

// // Create a category
// const createCategory = (payload) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/category.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// // filter by category
// const getSingleCategory = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/category/${firebaseKey}.json`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// //  Delete a category
// const deleteSingleCategory = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/category/${firebaseKey}.json`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// //  Update a category
// const updateCategory = (payload) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/category/${payload.firebaseKey}.json`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((response) => response.json())
//     .then(resolve)
//     .catch(reject);
// });

// // GET A SINGLE AUTHOR'S BOOKS
// const getCardsByCategory = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/vocab.json?orderBy="author_id"&equalTo="${firebaseKey}"`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(Object.values(data)))
//     .catch(reject);
// });

// // Get category by favorite
// const getFavoriteCategory = (uid) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/category.json?orderBy="uid"&equalTo="${uid}"`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const favorited = Object.values(data).filter((item) => item.favorite);
//       resolve(favorited);
//     })
//     .catch(reject);
// });

export default getCategorys;
