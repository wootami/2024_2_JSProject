// firebase-config.js (Firebase 설정 및 초기화)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-database.js";

// Firebase 설정 객체
const firebaseConfig = {
  apiKey: "AIzaSyBdTMSJuAXluGdrQk6aAxPTszRme0YbKfA",
  authDomain: "jsproject-e6692.firebaseapp.com",
  projectId: "jsproject-e6692",
  storageBucket: "jsproject-e6692.appspot.com", 
  appId: "1:847960636309:web:06e0cdc6327acbcf66949c",
  measurementId: "G-DK3XLS078M"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
