let cover = document.getElementById('cover');
let texto = document.getElementById('texto');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    cover.style.bottom = value * 0.6 + 'px';
    
});