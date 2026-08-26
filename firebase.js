import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCq-00ccmu-0OdjiDtUHmePwDDnUeXqXQM",
  authDomain: "hashir-emadi-portfolio.firebaseapp.com",
  projectId: "hashir-emadi-portfolio",
  storageBucket: "hashir-emadi-portfolio.appspot.com",
  messagingSenderId: "127041337899",
  appId: "1:127041337899:web:af6d606e39b0ebb223c86e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  serverTimestamp
};