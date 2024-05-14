// grid-show 클래스를 가진 요소를 선택합니다.
const gridElement = document.querySelector('.grid-show');

// keydown 이벤트 리스너를 추가합니다.
document.addEventListener('keydown', function(event) {
    // ESC 키를 눌렀는지 확인합니다.
    if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
        // grid-show 클래스를 토글합니다.
        gridElement.classList.toggle('grid-show');
    }
});