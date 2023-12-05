import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation">navigation</div>
  <div id="main-container">
    <div id="add-button">add button</div>
    <div id="form-container">form container</div>
    <div id="store">store</div>
    <div id="view">view</div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
