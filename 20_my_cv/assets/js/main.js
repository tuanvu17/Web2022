
/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header');
}


window.addEventListener('scroll', scrollHeader);

/*=============== SERVICES MODAL ===============*/





/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
console.log('%c [ sections ]-22', 'font-size:13px; background:pink; color:#bf2c9f;', sections)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
         const   sectionTop = current.offsetTop - 58
        const    sectionId = current.getAttribute('id')
        console.log('%c [ sectionId ]-64', 'font-size:13px; background:pink; color:#bf2c9f;', sectionId)

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)






/*=============== LIGHT DARK THEME ===============*/
const thememButton = document.getElementById('theme-button');
const lightTheme = 'light-theme' //class ===
const iconTheme = 'bx-sun' //class ==>>> mac dinh la bx-mon

// Previously selected topic (if user selected)

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>  document.body.classList.contains(lightTheme) ? 'light' : 'dark';
const getCureentIcon = () => thememButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// We validate if the user previously chose a topic
if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
    thememButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}
// Activate / deactivate the theme manually with the button
thememButton.addEventListener('click',()=>{
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme); //bodyyy
    thememButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCureentIcon());
})

