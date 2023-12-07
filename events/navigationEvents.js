import { signOut } from '../utils/auth';
import { showCards } from '../pages/vocab';
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
  // BOOKS Public / Private
  // document.querySelector('#sale-books').addEventListener('click', () => {
  //   vocabByLanguage(user.uid).then(showCards);
  //   console.warn('CLICKED SALE BOOKS');
  // });

  // ALL CARDS
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocabCard(user.uid).then(showCards);
    console.warn('CLICKED ALL CARDS');
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    // const searchValue = document.querySelector('#search').value.toLowerCase();
    // console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // const searchValue = document.querySelector('#search').value.toLowerCase();
      // getBooks(user.uid).then((arr) => {
      //   const filteredBooks = arr.filter((item) => item.title.toLowerCase().includes(searchValue)
      //     || item.authorObject.first_name.toLowerCase().includes(searchValue)
      //     || item.authorObject.last_name.toLowerCase().includes(searchValue));
      //   showBooks(filteredBooks);
      // });
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
