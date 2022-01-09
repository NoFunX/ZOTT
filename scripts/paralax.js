const guy = document.querySelector('.paralax__guy');
const snow = document.querySelector('.paralax__snow');

window.addEventListener('scroll', function() {
    let value = window.pageYOffset / 10
    if (value < 50) {
        guy.style.transition = 'all 5s'   
        guy.style.transform = 'translate(' + value * 7 + 'px, ' + value * 2 + 'px)';
        snow.style.transition = 'all 5s'   
        snow.style.transform = 'translate(' + value * 7 + 'px, ' + value * 2 + 'px)';
    }
});