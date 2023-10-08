// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const all = import.meta.env;
console.log(all);
const firebaseConfig = {
  apiKey: 'AIzaSyCJOdNbrSLYIhyPcAd-Z4z5Q0_CC_w2-Q8',
  authDomain: 'event-management-a9-7fba6.firebaseapp.com',
  projectId: 'event-management-a9-7fba6',
  storageBucket: 'event-management-a9-7fba6.appspot.com',
  messagingSenderId: '804434449941',
  appId: '1:804434449941:web:06fd2871dcee5fa3e3e01c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
