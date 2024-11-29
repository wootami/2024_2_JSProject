import { loginUser } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // 로그인 폼 제출 이벤트 처리
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            await loginUser(email, password); // 로그인 함수 호출
            alert('로그인 성공!');
            window.location.href = 'index.html'; // 홈으로 이동
        } catch (error) {
            alert('로그인 실패: ' + error.message); // 실패 메시지
        }
    });
});
