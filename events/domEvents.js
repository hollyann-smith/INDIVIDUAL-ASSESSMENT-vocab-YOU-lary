import { deleteVocabCard, getVocabCard, getSingleVocabCard } from '../api/vocabData';
import { showCards } from '../pages/vocab';
import addVocabForm from '../components/forms/addVocabForm';
// import viewVocabCard from '../pages/viewVocab';

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

    // CLICK EVENT EDITING/UPDATING A VOCAB
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocabCard(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
    }
  });
};

export default domEvents;
