// firebase-app.js 파일 (Firebase 설정 및 회원가입/로그인, 데이터베이스 연동 모두 포함)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-auth.js";
import { getDatabase, ref, set, get, child, push } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-database.js";

// Firebase 설정 객체
const firebaseConfig = {
  apiKey: "AIzaSyBdTMSJuAXluGdrQk6aAxPTszRme0YbKfA",
  authDomain: "jsproject-e6692.firebaseapp.com",
  projectId: "jsproject-e6692",
  storageBucket: "jsproject-e6692.appspot.com", // 오류 수정: storageBucket URL 오타 수정
  messagingSenderId: "847960636309",
  appId: "1:847960636309:web:06e0cdc6327acbcf66949c",
  measurementId: "G-DK3XLS078M"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Google Auth Provider 초기화
const provider = new GoogleAuthProvider();

// 폼 이벤트 처리 함수
const formHandler = (form, callback) => {
  if (form) {
    form.addEventListener('submit', e => { 
      e.preventDefault(); 
      const email = form['email'].value;
      const password = form['password'].value;
      if (email && password) {
        callback(email, password);
      } else {
        console.error('이메일과 비밀번호를 모두 입력해주세요.');
        alert('이메일과 비밀번호를 모두 입력해주세요.');
      }
    });
  }
};

// 회원가입 로직
formHandler(document.getElementById('signup-form'), (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      const userId = auth.currentUser ? auth.currentUser.uid : null;
      if (userId) {
        saveUserData(userId, email, "");
        window.location.replace('dashboard.html');
      } else {
        console.error('유저 정보가 없습니다.');
      }
    })
    .catch(err => {
      console.error('회원가입 실패:', err.message);
      alert('회원가입 실패: ' + err.message);
    });
});

// 로그인 로직
formHandler(document.getElementById('login-form'), (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.replace('dashboard.html'))
    .catch(err => {
      console.error('로그인 실패:', err.message);
      alert('로그인 실패: ' + err.message);
    });
});

// Google 로그인 로직
const googleLoginButton = document.getElementById('google-login-button');
if (googleLoginButton) {
  googleLoginButton.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const userId = user ? user.uid : null;
        if (userId) {
          saveUserData(userId, user.displayName, user.email);
          window.location.replace('dashboard.html');
        } else {
          console.error('유저 정보가 없습니다.');
        }
      })
      .catch(err => {
        console.error('Google 로그인 실패:', err.message);
        alert('Google 로그인 실패: ' + err.message);
      });
  });
}

// 데이터 저장 함수
export const saveUserData = (userId, name, email) => {
  set(ref(database, 'users/' + userId), { username: name, email })
    .then(() => console.log('저장 성공'))
    .catch(err => {
      console.error('저장 실패:', err);
      alert('데이터 저장 실패: ' + err.message);
    });
};

// 데이터 불러오기 함수
export const getUserData = (userId) => {
  get(child(ref(database), `users/${userId}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("데이터 없음");
        alert("데이터가 없습니다.");
      }
    })
    .catch(err => {
      console.error('불러오기 실패:', err);
      alert('데이터 불러오기 실패: ' + err.message);
    });
};

// 여행 예산 관리 함수 추가
export const saveBudgetData = (userId, tripId, totalBudget, expenses) => {
  const budgetRef = ref(database, `budgets/${userId}/${tripId}`);
  set(budgetRef, {
    total_budget: totalBudget,
    expenses: expenses
  })
    .then(() => console.log('예산 저장 성공'))
    .catch(err => {
      console.error('예산 저장 실패:', err);
      alert('예산 데이터 저장 실패: ' + err.message);
    });
};

// 예산 정보 가져오기 함수
export const getBudgetData = (userId, tripId) => {
  get(child(ref(database), `budgets/${userId}/${tripId}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("예산 데이터 없음");
        alert("예산 데이터가 없습니다.");
      }
    })
    .catch(err => {
      console.error('예산 정보 불러오기 실패:', err);
      alert('예산 데이터 불러오기 실패: ' + err.message);
    });
};
