import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/authButtons/loginButton';
import startApp from './startApp';
import client from './client';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
      // startApp(user);
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
