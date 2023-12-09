import {
  deleteVocabCard,
  getVocabCard,
  getSingleVocabCard,
  vocabByLanguage
}
  from '../api/vocabData';
import { showButtonRow, showCards } from '../pages/vocab';
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
    const btnRow = document.querySelectorAll('#category-btn');
    btnRow.forEach((item) => {
      item.addEventListener('click', () => {
        // const catergory = item.dataset.catergory_name;
        console.warn('clicked category', item.innerHTML);
        // vocabByLanguage(item.innerHTML).then(showCards);
        vocabByLanguage(item.innerHTML).then((match) => {
          showCards(match);
          showButtonRow(match);
        });
      });
    });

    // CLICK EVENT EDITING/UPDATING A VOCAB
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocabCard(firebaseKey).then((vocabObj) => addVocabForm(user.uid, vocabObj));
    }
  });
};

export default domEvents;
