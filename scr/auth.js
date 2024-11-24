import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// 회원가입 함수
export const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('회원가입 성공:', userCredential.user);
        })
        .catch((error) => {
            console.error('회원가입 오류:', error.message);
        });
};

// 로그인 함수
export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('로그인 성공:', userCredential.user);
        })
        .catch((error) => {
            console.error('로그인 오류:', error.message);
        });
};
