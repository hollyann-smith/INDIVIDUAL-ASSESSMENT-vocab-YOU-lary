import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Vocab Cards</h1>';
  renderToDOM('#store', domString);
};

const showButtonRow = (array) => {
  let btnString = '';
  const categoryNames = array.map((obj) => obj.category_name);
  console.warn('category names', categoryNames);
  console.warn('category named', categoryNames.filter((value, index, categoryArray) => categoryArray.indexOf(value) === index));
  categoryNames.filter((value, index, categoryArray) => categoryArray.indexOf(value) === index).forEach((itemName) => {
    btnString += `<button id="category-btn" class="btn btn-success btn-lg mb-4" id=${itemName}>${itemName}</button>`;
  });
  renderToDOM('#button-row', btnString);
};

const showCards = (array) => {
  console.warn('showCards array', array);
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success" alt=${item.category_name} >${item.category_name}</div>
  <div class="card-body text-success">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-definition">${item.definition}</p>
  </div>
  <div class="card-footer bg-transparent border-success">            <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
  <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i></div>
</div>`;
  });
  renderToDOM('#store', domString);
};

export { showCards, emptyCards, showButtonRow };
