// import { createAuthor, getAuthors, updateAuthor } from '../api/authorData';
import { createVocabCard, updateVocabCard, getVocabCard } from '../api/vocabData';
// import { showAuthors } from '../pages/authors';
import { showCards } from '../pages/vocab';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCAB CARD
    if (e.target.id.includes('submit-vocab')) {
      const date = new Date();
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category_id: document.querySelector('#category_id').value,
        favorite: document.querySelector('#favorite').checked,
        uid: user.uid,
        timeSubmitted: date,
      };
      createVocabCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocabCard(patchPayload).then(() => {
          getVocabCard(user.uid).then(showCards);
        });
      });
    }

    // CLICK EVENT FOR EDITING A VOCAB CARD
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definiton').value,
        category_id: document.querySelector('#category_id').value,
        favorite: document.querySelector('#favorite').checked,
        firebaseKey,
      };

      updateVocabCard(payload).then(() => {
        getVocabCard(user.uid).then(showCards);
      });
    }

    // // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    // if (e.target.id.includes('submit-author')) {
    //   const payload = {
    //     first_name: document.querySelector('#first_name').value,
    //     last_name: document.querySelector('#last_name').value,
    //     email: document.querySelector('#email').value,
    //     uid: user.uid,
    //   };
    //   createAuthor(payload).then(({ name }) => {
    //     const patchPayload = { firebaseKey: name };
    //     updateAuthor(patchPayload).then(() => {
    //       getAuthors(user.uid).then(showAuthors);
    //     });
    //   });
    // }
    // // ADD CLICK EVENT FOR EDITING AN AUTHOR
    // if (e.target.id.includes('update-author')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   const payload = {
    //     first_name: document.querySelector('#first_name').value,
    //     last_name: document.querySelector('#last_name').value,
    //     email: document.querySelector('#email').value,
    //     firebaseKey,
    //   };

    //   updateAuthor(payload).then(() => {
    //     getAuthors(user.uid).then(showAuthors);
    //   });
    // }
  });
};

export default formEvents;
