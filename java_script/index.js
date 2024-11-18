// 'toggle-button' 클래스를 가진 버튼 요소를 선택
const button = document.querySelector('.toggle-button');

// 'mySidebar' ID를 가진 사이드바 요소를 선택
const sidebar = document.getElementById('mySidebar');

// 버튼 클릭 이벤트 리스너 추가
button.addEventListener('click', () => {
    // 사이드바의 'open' 클래스를 토글하여 열림/닫힘 상태 변경
    sidebar.classList.toggle('open'); // 사이드바의 열림 상태 토글
    
    // 사이드바가 열려 있는지 확인하고 버튼 텍스트 변경
    button.textContent = sidebar.classList.contains('open') 
        ? '사이드바 닫기' // 열려 있으면 '사이드바 닫기'로 텍스트 변경
        : '사이드바 열기'; // 닫혀 있으면 '사이드바 열기'로 텍스트 변경

    // 사이드바 1이 열리면 사이드바 2를 닫기
    if (sidebar.classList.contains('open')) {
        sidebar1.classList.remove('open');
        button1.textContent = '로그인 창'; // 로그인 버튼 텍스트 초기화
    }
});

// 'login-button' 클래스를 가진 버튼 요소를 선택
const button1 = document.querySelector('.login-button');

// 'loginsidebar' ID를 가진 사이드바 요소를 선택
const sidebar1 = document.getElementById('loginsidebar');

// 버튼 클릭 이벤트 리스너 추가
button1.addEventListener('click', () => {
    // 사이드바의 'open' 클래스를 토글하여 열림/닫힘 상태 변경
    sidebar1.classList.toggle('open'); // 사이드바의 열림 상태 토글
    
    // 사이드바가 열려 있는지 확인하고 버튼 텍스트 변경
    button1.textContent = sidebar1.classList.contains('open')
        ? '로그인 창 닫기' // 열려 있으면 '로그인 창 닫기'로 텍스트 변경
        : '로그인 창'; // 닫혀 있으면 '로그인 창'으로 변경

    // 사이드바 2가 열리면 사이드바 1을 닫기
    if (sidebar1.classList.contains('open')) {
        sidebar.classList.remove('open');
        button.textContent = '사이드바 열기'; // 사이드바 버튼 텍스트 초기화
    }
});

document.getElementById('signupButton').onclick = function(){
    window.location.href = '/2024_2_JSProject/html/resign.html'
}