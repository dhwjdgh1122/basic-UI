// DOM 선택
const burgerButton = document.querySelector('.burger-button');
const menu = document.querySelector('.menu');

// 함수 구현
const handleClick = () => {
  // 'is-active' 클래스의 존재 여부에 따라 클래스를 추가하거나 제거합니다.
  if (burgerButton.classList.contains('is-active')) {
    burgerButton.classList.remove('is-active');
    burgerButton.setAttribute('aria-label', '메인메뉴 열기');
    menu.classList.remove('is-active'); // '.menu'에서 'is-active' 클래스를 제거합니다.
  } else {
    burgerButton.classList.add('is-active');
    burgerButton.setAttribute('aria-label', '메인메뉴 닫기');
    menu.classList.add('is-active'); // '.menu'에 'is-active' 클래스를 추가합니다.
  }
};

// 이벤트 바인딩
burgerButton.addEventListener('click', handleClick);