<<<<<<< HEAD
//메인 로직 담당 app.js 파일
import { loginEmail, signupEmail,loginGoogle } from './firebase-config.js';
const buttons = document.getElementById('buttons');

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
=======
import { loginUser, googleLogin } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    // 네비게이션 기능
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            console.log('Clicked link:', targetId);
            sections.forEach(section => {
                section.classList.remove('active');
                console.log('Removed active from:', section.id);
            });
            const targetSection = document.getElementById(targetId);
            targetSection.classList.add('active');
            console.log('Added active to:', targetId);
        });
    });

    // 로그인 기능
    const loginForm = document.getElementById('loginForm');

    // 로그인 폼 제출 이벤트 처리
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('로그인 시도:', email, password);

        try {
            await loginUser(email, password); 
            alert('로그인 성공!');
            window.location.href = 'index.html'; // 로그인 성공 시 index.html로 이동
        } catch (error) {
            alert('로그인 실패: ' + error.message);
        }
    });

    // Google 로그인 버튼 클릭 이벤트 처리
    const googleLoginButton = document.getElementById('google-login');
    googleLoginButton.addEventListener('click', async () => {
        try {
            await googleLogin();
            alert('Google 로그인 성공!');
            window.location.href = 'index.html'; // Google 로그인 성공 시 index.html로 이동
        } catch (error) {
            alert('Google 로그인 실패: ' + error.message);
        }
    });

    // Google Maps 초기화 (API 키가 필요함)
    let map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 37.5665, lng: 126.9780},
            zoom: 8
        });
    }
    initMap();

    // 예산 관리 기능
    const budgetForm = document.getElementById('budgetForm');
    const expenseList = document.getElementById('expenseList');
    const totalBudget = document.getElementById('totalBudget');
    let budget = 0;

    budgetForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const amount = Number(document.getElementById('amount').value);
        const description = document.getElementById('description').value;
        budget += amount;
        totalBudget.textContent = budget;
        const li = document.createElement('li');
        li.textContent = `${description}: ${amount}원`;
        expenseList.appendChild(li);
        budgetForm.reset();
    });

    // 체크리스트 기능
    const checklistForm = document.getElementById('checklistForm');
    const checklistItems = document.getElementById('checklistItems');

    checklistForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const item = document.getElementById('item').value;
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox">
            <span>${item}</span>
            <button class="delete">삭제</button>
        `;
        checklistItems.appendChild(li);
        checklistForm.reset();
    });

    checklistItems.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        }
    });

    // 날씨 정보 기능 (API 키가 필요함)
    const getWeatherBtn = document.getElementById('getWeather');
    const weatherInfo = document.getElementById('weatherInfo');

    getWeatherBtn.addEventListener('click', function() {
        const city = document.getElementById('city').value;
        // 여기에 실제 날씨 API 호출 로직을 구현해야 합니다.
        weatherInfo.textContent = `${city}의 날씨 정보를 가져오는 중...`;
    });
});
>>>>>>> 57734fa3aab2156f4a22d0d15fd430332a0f4e27
