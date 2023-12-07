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
      console.warn(document.querySelector('#category_id').selectedOptions[0].id);
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category_id: document.querySelector('#category_id').selectedOptions[0].id,
        favorite: document.querySelector('#favorite').checked,
        category_name: document.querySelector('#category_id').value,
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
  });
};

export default formEvents;
