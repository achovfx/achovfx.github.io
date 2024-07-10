// Variables
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-icon");
const sendMessageBtn = document.querySelector("input[type='submit']");
const _ = document;

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
        }else{
            header.classList.remove('sticky');
            header.classList.add('transition3s');
        }

    })
}
// Navbar =======================================================

menuBtn.addEventListener("click",()=>{
    if(navbar.style.opacity == 0){
        navbar.style.top = 70+"px";
        navbar.style.opacity = 1;
    }else{
        navbar.style.top = -400+"px";
        navbar.style.opacity = 0;
    }
})


// Menu =========================================================


// Intro =======================================================
$('.loadingbar').delay(1500).animate({left: '0'}, 1000);
$('.loadingBox').delay(500).animate({opacity: '1'}, 1000);
$('.splashScreen').delay(2700).animate({top: '-100%'}, 1500);
$('.loadingCircle').delay(2700).animate({opacity: '0'}, 500);
$('body').delay(5000).queue(function(){
	$('body').addClass("visibleSplash");
});
// Type Writer JS
const app = document.querySelector("#changerText");

let TypeWritter = new Typewriter(app, {
    loop: true,
});

TypeWritter
    .pauseFor(2000)
    .typeString("Back-End Developer")
    .pauseFor(2000)
    .deleteAll()
    .typeString("& a little Front-End :)")
    .pauseFor(1500)
    .deleteAll()
    .typeString('عجیبه :)))')
    .pauseFor(1500)
    .start();

// Go to Top Btn
function goToTop(){
    window.scrollTo(0,0);
}

// Updating Message
function showUpdatingMessage(){
    Swal.fire(
        'مشکل',
        'قعلا سایت درحال ساخت است 📣',
        'error'
    );
}

sendMessageBtn.addEventListener("click",(e)=>{
	e.preventDefault();
	showUpdatingMessage();
})

document.querySelectorAll(".btn").forEach((btn)=>{
    btn.addEventListener("click",()=>{
        showUpdatingMessage();
    })
})

// Fetching Comments
// function sendMessage(name,email,mobile,emailTitle,text){

//     let message = {
//         name: name,
//         email: email,
//         mobile: mobile,
//         email_title: emailTitle,
//         text: text
//     };

//     fetch("https://achovfx-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json",{
//     method: "POST",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify(message)
//     })
//     .then((res)=> console.log(res))
//     .catch((err)=> console.log(err))
// }

// sendMessageBtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     let mName = _.querySelector(".mName");
//     let mEmail = _.querySelector(".mEmail");
//     let mMobile = _.querySelector(".mMobile");
//     let mEmailTitle = _.querySelector(".mEmailTitle");
//     let mText = _.querySelector(".mText");

//     if(!mName.value || !mEmail.value || !mMobile.value || !mEmailTitle.value || !mText.value){
//         alert("Fill All Boxes");
//     }else{
//         let message = {
//             name: mName.value,
//             email: mEmail.value,
//             mobile: mMobile.value,
//             email_title: mEmailTitle.value,
//             text: mText.value,
//         };
//         fetch("https://achovfx-default-rtdb.asia-southeast1.firebasedatabase.app/nazarat.json",{
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(message)
//         })
//         .then((res)=> console.log(res))
//         .then(()=> {
//             mName.value= "";
//             mEmail.value= "";
//             mMobile.value= "";
//             mEmailTitle.value= "";
//             mText.value= "";
//         })
//         .then(()=> {
//             Swal.fire(
//                 'ارسال شد',
//                 'پیام شما با موفقیت ارسال شد',
//                 'success'
//             );
//         })
//         .catch(()=> {
//             Swal.fire(
//                 'مشکل',
//                 'لطفا اینترنت خود رو بررسی کنید',
//                 'error'
//             );
//         })
//     }
// })
