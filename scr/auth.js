// src/auth.js
import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// 구글 인증 공급자 설정
const provider = new GoogleAuthProvider();

// 회원가입 함수
export const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('회원가입 성공:', userCredential.user);
            return userCredential.user; // 사용자 정보 반환
        })
        .catch((error) => {
            console.error('회원가입 오류:', error.message);
            throw error; // 오류를 호출한 곳으로 전달
        });
};

// 로그인 함수
export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('로그인 성공:', userCredential.user);
            return userCredential.user; // 사용자 정보 반환
        })
        .catch((error) => {
            console.error('로그인 오류:', error.message);
            throw error; // 오류를 호출한 곳으로 전달
        });
};

// 구글 로그인 함수
export const loginGoogle = () => {
    return signInWithPopup(auth, provider)
        .then((result) => {
            console.log('구글 로그인 성공:', result.user);
            return result.user; // 사용자 정보 반환
        })
        .catch((error) => {
            console.error('구글 로그인 오류:', error.message);
            throw error; // 오류를 호출한 곳으로 전달
        });
};
