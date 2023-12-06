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

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A VOCAB
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm(user.uid);
    }

    // CLICK EVENT EDITING/UPDATING A VOCAB
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocabCard(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
    }
    // // CLICK EVENT FOR VIEW BOOK DETAILS
    // if (e.target.id.includes('view-vocab-btn')) {
    //   const [, firebaseKey] = e.target.id.split('--');

    //   getVocabDetails(firebaseKey).then(viewBook);
    // }

    // // CLICK EVENT FOR VIEW AUTHOR DETAILS
    // if (e.target.id.includes('view-author-btn')) {
    //   const [, firebaseKey] = e.target.id.split('--');

    //   getAuthorDetails(firebaseKey).then(viewAuthor);
    // }

    // // ADD CLICK EVENT FOR DELETING AN AUTHOR
    // if (e.target.id.includes('delete-author-btn')) {
    //   // eslint-disable-next-line no-alert
    //   if (window.confirm('Want to delete?')) {
    //     console.warn('DELETE AUTHOR', e.target.id);
    //     const [, firebaseKey] = e.target.id.split('--');

    //     deleteAuthorBooksRelationship(firebaseKey).then(() => {
    //       getAuthors(user.uid).then(showAuthors);
    //     });
    //   }
    // }

    // // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    // if (e.target.id.includes('add-author-btn')) {
    //   addAuthorForm();
    // }
    // // ADD CLICK EVENT FOR EDITING AN AUTHOR
    // if (e.target.id.includes('update-author')) {
    //   const [, firebaseKey] = e.target.id.split('--');

    //   getSingleAuthor(firebaseKey).then((authorObj) => addAuthorForm(authorObj));
    // }
  });
};

export default domEvents;
