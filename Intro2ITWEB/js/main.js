// 
let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    },600);
});
// loader

//
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-block').classList.toggle('open');
})
// Бургер меню

//
window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.upward');
    scroll.classList.toggle("active", window.scrollY>500)
})
function scrollTopTop() {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}
// стрелка