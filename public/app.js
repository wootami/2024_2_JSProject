import { register, login, loginGoogle } from './auth.js';

document.getElementById('registerBtn').addEventListener('click', async () => {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    try {
        const user = await register(email, password);
        alert(`회원가입 성공: ${user.email}`);
    } catch (error) {
        alert(`회원가입 오류: ${error.message}`);
    }
});

document.getElementById('loginBtn').addEventListener('click', async () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    try {
        const user = await login(email, password);
        alert(`로그인 성공: ${user.email}`);
    } catch (error) {
        alert(`로그인 오류: ${error.message}`);
    }
});

document.getElementById('googleLoginBtn').addEventListener('click', async () => {
    try {
        const user = await loginGoogle();
        alert(`구글 로그인 성공: ${user.email}`);
    } catch (error) {
        alert(`구글 로그인 오류: ${error.message}`);
    }
});
