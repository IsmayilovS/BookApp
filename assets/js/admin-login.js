// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWUoiplr4yMl3CWj4jndUCkTVTQbreHcc",
  authDomain: "books-d8757.firebaseapp.com",
  projectId: "books-d8757",
  storageBucket: "books-d8757.appspot.com",
  messagingSenderId: "763549368494",
  appId: "1:763549368494:web:16491abc1103f24f432d3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth);


// SIGNING ///


//submit button
const submit = document.getElementById('submitL');
submit.addEventListener("click", function (event) {
  event.preventDefault()

  //inputs
const email = document.getElementById("emailL").value
const password = document.getElementById("passwordL").value

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Signing ...")
    window.location.href = "index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

})

export function loginPart(){
// SIGNING ///


//submit button
const submit = document.getElementById('submitL');
submit.addEventListener("click", function (event) {
  event.preventDefault()

  //inputs
const email = document.getElementById("emailL").value
const password = document.getElementById("passwordL").value

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Signing ...")
    window.location.href = "index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

})
}