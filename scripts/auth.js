import { auth } from './firebase-config.js';
import firebase from 'firebase/app';

export const signUp = async (email, password) => {
    try {
        await auth.createUserWithEmailAndPassword(email, password);
        alert("회원가입에 성공했습니다!");
    } catch (error) {
        alert("회원가입 실패: " + error.message);
    }
};

export const logIn = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        alert("로그인에 성공했습니다!");
    } catch (error) {
        alert("로그인 실패: " + error.message);
    }
};

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const googleSignIn = async () => {
    try {
        await auth.signInWithPopup(googleProvider);
        alert("구글 로그인이 성공했습니다!");
    } catch (error) {
        alert("구글 로그인 실패: " + error.message);
    }
};
