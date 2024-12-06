//메인 로직 담당 app.js 파일
import { loginEmail, signupEmail,loginGoogle } from './firebase-config.js';
const buttons = document.getElementById('buttons');
import { logout } from './js/auth.js';

//Email 로그인, 회원가입 구현
buttons.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id == 'signin') {
      loginEmail(email.value, pw.value).then((result) => {
        console.log(result);
        const user = result.user;
        loginSuccess(user.email, user.uid);
      });
    } else if (e.target.id == 'signup') {
      signupEmail(email.value, password.value) //
        .then((result) => {
          const user = result.user;
          loginSuccess(user.email, user.uid);
        })
        .catch((error) => console.log(error));
    }
  });

  google.addEventListener('click', (e) => {
    loginGoogle().then((result) => {
      console.log(result);
      const user = result.user;
      loginSuccess(user.email, user.uid);
    });
  });
  //로그인 성공시 UI 변경
  const loginSuccess = (email, uid) => {
    const login_area = document.getElementById('login-area');
    login_area.innerHTML = `<h2>Login 성공!</h2><div>uid: ${uid}</div><div>email: ${email}</div>`;
  };


  import { auth } from './firebase-config.js';

  document.addEventListener('DOMContentLoaded', () => {
      const userInfo = document.getElementById('user-info');
      const authButtons = document.getElementById('auth-buttons');
      
      auth.onAuthStateChanged((user) => {
          if (user) {
              // 로그인 상태
              userInfo.textContent = `${user.email}님 환영합니다`;
              userInfo.style.display = 'inline';
              authButtons.style.display = 'none';
          } else {
              // 로그아웃 상태
              userInfo.style.display = 'none';
              authButtons.style.display = 'block';
          }
      });
  });

  document.getElementById('logout-btn').addEventListener('click', logout);