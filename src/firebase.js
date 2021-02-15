import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBggQBxaZdVVRxa1hsE1-AZjnvI7TviBFg",
    authDomain: "snapchat-ce062.firebaseapp.com",
    projectId: "snapchat-ce062",
    storageBucket: "snapchat-ce062.appspot.com",
    messagingSenderId: "958689057374",
    appId: "1:958689057374:web:1623890204cd3d474772cf"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db =firebaseApp.firestore()
  const auth=firebase.auth()
  const storage=firebase.storage()
  const provider=new firebase.auth.GoogleAuthProvider()

  export {db,auth,provider,storage}