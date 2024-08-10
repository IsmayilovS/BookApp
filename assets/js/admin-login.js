
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
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
  const db = getFirestore(app);
  console.log(db);
  
// For opening signing form and creating account form

  const creatBtn = document.getElementById("u-create");
  const signBtn = document.getElementById("u-sign");
  const formSign = document.querySelector(".login-form")
  const formCreate =document.querySelector(".create-form")

  creatBtn.addEventListener("click",()=>{
    formSign.classList.add("hidden");
    formCreate.classList.remove("hidden")
  })
  signBtn.addEventListener("click",()=>{
    formCreate.classList.add("hidden");
    formSign.classList.remove("hidden")
  })
// 