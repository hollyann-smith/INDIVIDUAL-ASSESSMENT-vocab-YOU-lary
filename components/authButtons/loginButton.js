import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector('#login').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn); document.querySelector('#header').innerHTML = 'Welcome to <br> Vocab-YOU-lary!';
};

export default loginButton;
