import {
  deleteVocabCard,
  getVocabCard,
  getSingleVocabCard,

}
  from '../api/vocabData';
import { showCards } from '../pages/vocab';
import addVocabForm from '../components/forms/addVocabForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE CARD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocabCard(firebaseKey).then(() => {
          getVocabCard(user.uid).then(showCards);
        });
      }
    }

    // filter by category
    document.querySelector('#category-btn').addEventListener('click', () => {
      console.warn('clicked category');
      // vocabByLanguage(user.category_name).then(showCards);
    });

    // CLICK EVENT EDITING/UPDATING A VOCAB
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocabCard(firebaseKey).then((vocabObj) => addVocabForm(user.uid, vocabObj));
    }
  });
};

export default domEvents;
