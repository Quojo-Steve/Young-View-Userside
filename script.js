const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');
const home = document.querySelectorAll('.home')

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

home.forEach((btn) => {
    btn.addEventListener('click', () => {
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    })
})

home.addEventListener('click', () => {
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
})

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});