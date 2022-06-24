import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJgfwzmlgOACyesugjYu2oD9AKprsPyjQ",
  authDomain: "todo-9b81f.firebaseapp.com",
  projectId: "todo-9b81f",
  storageBucket: "todo-9b81f.appspot.com",
  messagingSenderId: "841287708730",
  appId: "1:841287708730:web:212fdc07c9168e60a0c503"
};

firebase.initializeApp(firebaseConfig);

