const clearDom = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#button-row').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

const clearNav = () => {
  document.querySelector('#navigation').innerHTML = '';
};
export { clearDom, clearNav };
