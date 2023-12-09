import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="button-row"></div>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="view"></div>
  </div>`;

  renderToDOM('#app', domString);
  renderToDOM('#header', ' ');
};

export default domBuilder;
