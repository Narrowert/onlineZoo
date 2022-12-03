const overlay = document.querySelector('.overlay');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav-item__link');

document.querySelector('.burger').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger--active');
    overlay.classList.toggle('overlay--active');
    nav.classList.toggle('nav--active');
});

navItems.forEach(element => {
    element.addEventListener("click", (e)=> {
        navItems.forEach(el => {
            el.classList.remove('active')}
        );
        e.currentTarget.classList.toggle('active');
    })
});
