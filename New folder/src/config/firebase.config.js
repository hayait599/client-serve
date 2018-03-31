import firebase from 'firebase';
 
const config = {
  apiKey: 'AIzaSyDOFfZe_EaXDroLGeTCl7Vau2p6OHxaUhk',
  authDomain: 'post-cd089.firebaseapp.com',
  databaseURL: 'https://post-cd089.firebaseio.com',
  projectId: 'post-cd089',
  storageBucket: 'post-cd089.appspot.com',
  messagingSenderId: '455005298320'
};
const fire = firebase.initializeApp(config);
export default fire;
