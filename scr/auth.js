// src/auth.js
// 사용자 인증 관련 함수 구현

import { auth } from './firebase-config.js';
import firebase from 'firebase/app'; // Firebase 앱 모듈 가져오기

/**
 * 이메일과 비밀번호를 사용하여 사용자 회원가입
 * @param {string} email - 사용자 이메일
 * @param {string} password - 사용자 비밀번호
 */
export const signUp = async (email, password) => {
    try {
        await auth.createUserWithEmailAndPassword(email, password);
        alert("회원가입에 성공했습니다!");
    } catch (error) {
        alert("회원가입 실패: " + error.message);
    }
};

/**
 * 이메일과 비밀번호를 사용하여 사용자 로그인
 * @param {string} email - 사용자 이메일
 * @param {string} password - 사용자 비밀번호
 */
export const logIn = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        alert("로그인에 성공했습니다!");
    } catch (error) {
        alert("로그인 실패: " + error.message);
    }
};

// Google 인증 제공자 인스턴스 생성
const googleProvider = new firebase.auth.GoogleAuthProvider();

/**
 * Google 계정을 사용하여 사용자 로그인
 */
export const googleSignIn = async () => {
    try {
        await auth.signInWithPopup(googleProvider);
        alert("구글 로그인이 성공했습니다!");
    } catch (error) {
        alert("구글 로그인 실패: " + error.message);
    }
};
