import { auth } from '../firebase';
import { fetchSignInMethodsForEmail } from 'firebase/auth';

const checkEmail = async (email) => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)) {
    return new Promise((resolve) => {
      fetchSignInMethodsForEmail(auth, email).then(function (providers) {
        resolve(providers.length > 0);
      });
    });
  } else {
    return false;
  }
};

export default checkEmail;
