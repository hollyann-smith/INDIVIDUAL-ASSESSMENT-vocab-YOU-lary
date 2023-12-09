import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewVocabCard = (obj) => {
  clearDom();

  const domString = `
    <div id="card" class="card border-light mb-3" style="max-width: 18rem; ">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body text-success">
    <h5 id="language" class="card-title">${obj.title}</h5>
    <p class="card-text">${obj.description || ''}</p>
  </div>
  <div class="card-footer bg-transparent border-success">
  <i id="edit-vocab-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
    <i id="delete-vocab--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  </div>
</div>`;

  renderToDOM('#view', domString);
};

export default viewVocabCard;
