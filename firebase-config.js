// 필요한 SDK의 함수들을 가져옵니다.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"; // Firebase 앱 초기화 함수
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js"; // Firebase Analytics 함수

// TODO: 사용하려는 Firebase 제품의 SDK를 추가합니다.
// 추가 가능한 Firebase 제품은 Firebase 문서에서 확인할 수 있습니다.
// https://firebase.google.com/docs/web/setup#available-libraries

// 웹 앱의 Firebase 구성
// Firebase JS SDK v7.20.0 및 이후 버전에서 measurementId는 선택 사항입니다.
const firebaseConfig = {
    apiKey: "AIzaSyBdTMSJuAXluGdrQk6aAxPTszRme0YbKfA", // Firebase API 키
    authDomain: "jsproject-e6692.firebaseapp.com", // Firebase 인증 도메인
    projectId: "jsproject-e6692", // Firebase 프로젝트 ID
    storageBucket: "jsproject-e6692.firebasestorage.app", // Firebase 저장소 버킷
    messagingSenderId: "847960636309", // Firebase 메시징 송신자 ID
    appId: "1:847960636309:web:06e0cdc6327acbcf66949c", // Firebase 앱 ID
    measurementId: "G-DK3XLS078M" // Firebase 측정 ID
};

// Firebase 초기화
const app = initializeApp(firebaseConfig); // Firebase 앱을 초기화합니다.
const auth = getAnalytics(app); // Firebase Analytics 기능을 초기화합니다.
const db =getFirestore(app)
// 앱에서 Firebase 기능을 사용할 준비가 완료되었습니다.
