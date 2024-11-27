// firebase-app.js 파일 (Firebase 설정 및 회원가입/로그인, 데이터베이스 연동 모두 포함)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-database.js";

// Firebase 설정 객체
const firebaseConfig = {
  apiKey: "AIzaSyBdTMSJuAXluGdrQk6aAxPTszRme0YbKfA",
  authDomain: "jsproject-e6692.firebaseapp.com",
  projectId: "jsproject-e6692",
  storageBucket: "jsproject-e6692.firebasestorage.app",
  messagingSenderId: "847960636309",
  appId: "1:847960636309:web:06e0cdc6327acbcf66949c",
  measurementId: "G-DK3XLS078M"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// 폼 이벤트 처리 함수
const formHandler = (form, callback) => {
  if (form) form.addEventListener('submit', e => { 
    e.preventDefault(); 
    callback(form['email'].value, form['password'].value); 
  });
};

// 회원가입 로직
formHandler(document.getElementById('signup-form'), (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = 'dashboard.html')
    .catch(err => console.error('회원가입 실패:', err.message));
});

// 로그인 로직
formHandler(document.getElementById('login-form'), (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = 'dashboard.html')
    .catch(err => console.error('로그인 실패:', err.message));
});

// 데이터 저장 함수
export const saveUserData = (userId, name, email) => {
  set(ref(database, 'users/' + userId), { username: name, email })
    .then(() => console.log('저장 성공'))
    .catch(err => console.error('저장 실패:', err));
};

// 데이터 불러오기 함수
export const getUserData = (userId) => {
  get(child(ref(database), `users/${userId}`))
    .then(snapshot => {
      snapshot.exists() ? console.log(snapshot.val()) : console.log("데이터 없음");
    })
    .catch(err => console.error('불러오기 실패:', err));
};
