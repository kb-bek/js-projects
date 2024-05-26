const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
})