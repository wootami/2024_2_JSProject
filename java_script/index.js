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
});

// 'login-button' 클래스를 가진 버튼 요소를 선택
const button1 = document.querySelector('.login-button');

// 'loginsidebar' ID를 가진 사이드바 요소를 선택
const sidebar1 = document.getElementById('loginsidebar'); // 'documnet' 오타 수정

// 버튼 클릭 이벤트 리스너 추가
button1.addEventListener('click', () => {
    // 사이드바의 'open' 클래스를 토글하여 열림/닫힘 상태 변경
    sidebar1.classList.toggle('open'); // 사이드바의 열림 상태 토글
    
    // 사이드바가 열려 있는지 확인하고 버튼 텍스트 변경
    button1.textContent = sidebar1.classList.contains('open')
        ? '사이드바 닫기' // 열려 있으면 '사이드바 닫기'로 텍스트 변경
        : '사이드바 열기'; // 닫혀 있으면 '사이드바 열기'로 텍스트 변경
});
