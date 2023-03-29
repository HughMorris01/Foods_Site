// Navbar
document.querySelector('.menu').addEventListener('click', ()=> {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    });

})
// End of Navbar

// Banner Display
const icons = document.querySelectorAll('.section-1-icons i');
let i = 0;
setInterval(()=> {
    i++

    const icon = document.querySelector('.section-1-icons .change');

    icon.classList.remove('change');

    if(i >= icons.length){
        icons[0].classList.add('change');
        i = 0;
    } else {icon.nextElementSibling.classList.add('change')}

}, 3000);
// End of Banner Display

// Newsletter Response
document.querySelector('.signup-form-btn').addEventListener('click', ()=>{
    document.querySelector('.signup-form-input').value = "There is no newsletter...";
})
// End of Newsletter Response