import { signOut } from '../utils/auth';
import { showButtonRow, showCards } from '../pages/vocab';
import { getVocabCard } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';

const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // CLICK EVENT FOR SHOWING FORM FOR ADDING A VOCAB
  document.querySelector('#add-vocab-btn').addEventListener('click', () => {
    addVocabForm(user.uid);
  });

  // ALL CARDS
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocabCard(user.uid).then((vocab) => {
      showCards(vocab);
      showButtonRow(vocab);
    });
    console.warn('CLICKED ALL CARDS');
  });

  // filter by category
  // document.querySelectorAll('#category-btn').addEventListener('click', () => {
  //   console.warn('clicked category');
  //   vocabByLanguage(user.uid).then(showCards);
  // });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    // const searchValue = document.querySelector('#search').value.toLowerCase();
    // console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
