import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD8vyCelSDnRvhLew-d8BtmSPzQ4UbTis8",
  authDomain: "expense-tracker-8976f.firebaseapp.com",
  projectId: "expense-tracker-8976f",
  storageBucket: "expense-tracker-8976f.appspot.com",
  messagingSenderId: "969922779103",
  appId: "1:969922779103:web:ee3ebf2e063b3e4339566a"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)


// Services
export const db = getFirestore(app)