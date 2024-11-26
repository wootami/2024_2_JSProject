// public/app.js
import { registerWithEmail, loginWithEmail, loginWithGoogle } from '../src/auth.js';

// 회원가입 버튼 클릭 핸들러
document.getElementById('signup-btn').addEventListener('click', async () => {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  if (email && password) {
    await registerWithEmail(email, password);
  } else {
    alert('이메일과 비밀번호를 입력해주세요.');
  }
});

// 로그인 버튼 클릭 핸들러
document.getElementById('login-btn').addEventListener('click', async () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (email && password) {
    await loginWithEmail(email, password);
  } else {
    alert('이메일과 비밀번호를 입력해주세요.');
  }
});

// 구글 로그인 버튼 클릭 핸들러
document.getElementById('google-login-btn').addEventListener('click', async () => {
  await loginWithGoogle();
});
