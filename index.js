// Import stylesheets
import './style.css';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Write Javascript code!
function getTodayDate() {
  var today = new Date();
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return today.toLocaleDateString(undefined, options);
}

document.getElementById('entry');

console.log(getTodayDate());
const firebaseConfig = {
  apiKey: 'AIzaSyCvVPLBuEneWyrNCZSdYlIoS94Q8vvBHpk',

  authDomain: 'collective-journal.firebaseapp.com',

  projectId: 'collective-journal',

  storageBucket: 'collective-journal.appspot.com',

  messagingSenderId: '414372248122',

  appId: '1:414372248122:web:c34872119f96eafc40d303',

  measurementId: 'G-94KWG1GFKN',
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
