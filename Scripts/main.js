// Variables
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-icon");

// Navbar Color
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            })
        }

        if(window.scrollY >= 100){
            header.classList.add('sticky');
            header.classList.remove('transition3s');
            
            console.log("add");
        }else{
            header.classList.remove('sticky');
            header.classList.add('transition3s');
            console.log("remove");
        }

    })
}
// Navbar =======================================================

menuBtn.addEventListener("click",()=>{
    if(navbar.style.opacity == 0){
        navbar.style.width = 100+"%";
        navbar.style.opacity = 1;
    }else{
        navbar.style.width = 0+"%";
        navbar.style.opacity = 0;
    }
})


// Menu =========================================================
let menuIcon = document.querySelector

// Intro =======================================================
$('.loadingbar').delay(1500).animate({left: '0'}, 1000);
$('.loadingBox').delay(500).animate({opacity: '1'}, 1000);
$('.splashScreen').delay(2700).animate({top: '-100%'}, 1500);
$('.loadingCircle').delay(2700).animate({opacity: '0'}, 500);
$('body').delay(5000).queue(function(){
	$('body').addClass("visibleSplash");
});