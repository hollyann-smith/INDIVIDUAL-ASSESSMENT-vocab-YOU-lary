import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Vocab Cards</h1>';
  renderToDOM('#store', domString);
};

const showCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add A Vocab Card</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <img class="card-img-top" alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
          <h3 class="card-description">${item.definition}</h3>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-vocab-btn--${item.firebaseKey}"></i>
            <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showCards, emptyCards };
