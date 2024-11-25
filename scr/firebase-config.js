// src/firebase-config.js
// Firebase 초기 설정 및 서비스 내보내기

import firebase from 'firebase/app';
import 'firebase/auth'; // Firebase 인증 모듈 가져오기
import 'firebase/firestore'; // Firestore 데이터베이스 모듈 가져오기

// Firebase 구성 객체 (실제 값으로 대체 필요)
const firebaseConfig = {
  apiKey: "AIzaSyBdTMSJuAXluGdrQk6aAxPTszRme0YbKfA", // Firebase API 키
  authDomain: "jsproject-e6692.firebaseapp.com", // Firebase 인증 도메인
  projectId: "jsproject-e6692", // Firebase 프로젝트 ID
  storageBucket: "jsproject-e6692.firebasestorage.app", // Firebase 저장소 버킷
  messagingSenderId: "847960636309", // Firebase 메시징 송신자 ID
  appId: "1:847960636309:web:06e0cdc6327acbcf66949c", // Firebase 앱 ID
  measurementId: "G-DK3XLS078M" // Firebase 측정 ID
}

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// Firebase 서비스 내보내기
export const auth = firebase.auth();
export const db = firebase.firestore(); // Firestore 데이터베이스 사용 시
