
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBdTMSJuAXluGdrQk6aAxPTszRme0YbKfA",
    authDomain: "jsproject-e6692.firebaseapp.com",
    projectId: "jsproject-e6692",
    storageBucket: "jsproject-e6692.firebasestorage.app",
    messagingSenderId: "847960636309",
    appId: "1:847960636309:web:06e0cdc6327acbcf66949c",
    measurementId: "G-DK3XLS078M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
