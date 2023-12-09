import { clearDom } from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectCategory from './selectCategory';

const addVocabForm = (uid, obj = {}) => {
  console.warn('uid', uid);
  console.warn('obj', obj);
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Entry Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocab Word" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Vocab Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-category">
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocab Card
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectCategory(uid, `${obj.category_id || ''}`);
};

export default addVocabForm;
