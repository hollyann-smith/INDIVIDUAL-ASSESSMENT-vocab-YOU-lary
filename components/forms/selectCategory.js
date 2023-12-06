import getCategorys from '../../api/categoryData';
import renderToDOM from '../../utils/renderToDom';

const selectCategory = (uid, categoryId) => {
  let domString = `<label for="category">Select a Category</label>
    <select class="form-control" id="category_id" required>
    <option value="">Select a Category</option>`;

  getCategorys(uid).then((categoryArray) => {
    categoryArray.forEach((category) => {
      domString += `
          <option 
            value="${category.firebaseKey}" 
            ${categoryId === category.firebaseKey ? 'selected' : ''}>
              ${category.category}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-category', domString);
  });
};

export default selectCategory;
