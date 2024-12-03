// auth.js (인증 관련 로직)
import { auth, database } from './firebase-config.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.x.x/firebase-auth.js";
import { ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

// Google Auth Provider 초기화
const provider = new GoogleAuthProvider();

// 공통 데이터 저장 함수
const saveUserData = async (userId, name, email) => {
    try {
        await set(ref(database, 'users/' + userId), {
            username: name,
            email: email || "",
            createdAt: new Date().toISOString(), // ISO 표준 시간으로 저장
        });
        console.log('유저 데이터 저장 성공');
    } catch (err) {
        console.error('유저 데이터 저장 실패:', err);
        alert('유저 데이터 저장에 실패했습니다: ' + err.message);
    }
};

// 데이터 불러오기 함수
export const getUserData = async (userId) => {
    try {
        const snapshot = await get(child(ref(database), `users/${userId}`));
        if (snapshot.exists()) {
            console.log('유저 데이터:', snapshot.val());
            return snapshot.val();
        } else {
            console.warn('해당 유저 데이터가 없습니다.');
            alert('해당 유저 데이터가 존재하지 않습니다.');
        }
    } catch (err) {
        console.error('유저 데이터 불러오기 실패:', err);
        alert('유저 데이터 불러오기에 실패했습니다: ' + err.message);
    }
};

// 로그인 로직
export const loginUser = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('로그인 성공');
        window.location.replace('dashboard.html'); // 로그인 성공 시 대시보드로 이동
    } catch (err) {
        console.error('로그인 실패:', err.message);
        alert('로그인에 실패했습니다: ' + err.message);
    }
};

// 회원가입 로직
export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid;
        await saveUserData(userId, email, ""); // 회원가입 후 데이터 저장
        console.log('회원가입 성공');
        window.location.replace('dashboard.html'); // 회원가입 성공 시 대시보드로 이동
    } catch (err) {
        console.error('회원가입 실패:', err.message);
        alert('회원가입에 실패했습니다: ' + err.message);
    }
};

// Google 로그인 로직
export const googleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const userId = user.uid;
        await saveUserData(userId, user.displayName, user.email); // Google 로그인 후 데이터 저장
        console.log('Google 로그인 성공');
        window.location.replace('dashboard.html'); // Google 로그인 성공 시 대시보드로 이동
    } catch (err) {
        console.error('Google 로그인 실패:', err.message);
        alert('Google 로그인에 실패했습니다: ' + err.message);
    }
};
