// 필요한 SDK의 함수들을 가져옵니다.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"; // Firebase 앱 초기화 함수
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js"; // Firebase Analytics 함수
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js'; // Firebase 인증 관련 함수

// 웹 앱의 Firebase 구성
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
const analytics = getAnalytics(app); // Firebase Analytics 기능을 초기화합니다.
const auth = getAuth(app); // Firebase 인증 기능을 초기화합니다.

// 구글 로그인 공급자 설정
const provider = new GoogleAuthProvider(); // 구글 로그인을 위한 인증 공급자 초기화

// 구글 로그인 함수
export const loginGoogle = () => {
  return signInWithPopup(auth, provider) // 구글 로그인을 팝업창으로 진행
    .then((result) => {
      const user = result.user; // 로그인 성공 시 사용자 정보
      console.log("로그인 성공:", user);
      // 추가적인 로그인 성공 처리 로직
    })
    .catch((error) => {
      const errorCode = error.code; // 오류 코드
      const errorMessage = error.message; // 오류 메시지
      console.error("로그인 오류:", errorCode, errorMessage);
    });
};

// 앱에서 Firebase 기능을 사용할 준비가 완료되었습니다.
