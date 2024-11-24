import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"; // Firebase 앱 초기화 함수
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"; // Firestore 관련 함수

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
const db = getFirestore(app); // Firestore 초기화

// Firestore에 데이터 추가 함수
export const addUserData = async (userData) => {
  try {
    // 'users' 컬렉션에 사용자 정보 추가
    const docRef = await addDoc(collection(db, "users"), {
      ...userData,
      createdAt: new Date() // 생성일시 추가
    });
    console.log("사용자 데이터 저장 성공:", docRef.id);
  } catch (error) {
    console.error("사용자 데이터 저장 오류:", error.message);
  }
};

// 예시: 사용자 데이터 추가 호출
const sampleUserData = {
    uid: "sample-uid",
    email: "sample@example.com",
    displayName: "Sample User"
};

// Firestore에 샘플 사용자 데이터 추가
addUserData(sampleUserData);
