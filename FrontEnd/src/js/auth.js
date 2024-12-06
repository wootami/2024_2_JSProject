// auth.js (인증 관련 로직)
import { auth, database } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Google Auth Provider 초기화
const provider = new GoogleAuthProvider();

// 데이터 저장 함수
export const saveUserData = (userId, name, email) => {
    set(ref(database, 'users/' + userId), {
        username: name,
        email,
        createdAt: new Date().toISOString()
    }).then(() => console.log('저장 성공'))
      .catch(err => console.error('저장 실패:', err));
};

// 로그인 로직 (app.js에서 호출)
export const loginUser = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('로그인 성공');
        // 페이지 이동은 app.js에서 처리
    } catch (err) {
        console.error('로그인 실패:', err.message);
        throw new Error(err.message); // 호출한 곳에서 에러 처리 가능하도록 변경
    }
};

// Google 로그인 로직
export const googleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const userId = user ? user.uid : null;
        if (userId) {
            saveUserData(userId, user.displayName, user.email);
            // Google 로그인 성공 후 페이지 이동은 app.js에서 처리
        } else {
            console.error('유저 정보가 없습니다.');
        }
    } catch (err) {
        console.error('Google 로그인 실패:', err.message);
        throw new Error(err.message); // 호출한 곳에서 에러 처리 가능하도록 변경
    }
};
