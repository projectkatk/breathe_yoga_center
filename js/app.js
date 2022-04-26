const section = document.querySelector('.main-program');
const main = document.querySelector('main')
const toggleMenu = document.querySelector('.toggle-menu');
const toggleClose = document.querySelector('.toggle-close');
const navItems = document.querySelector('.menu-items');
const emailModal = document.querySelector('.email-modal');
const modalClose = document.querySelector('.modal-close-btn');
const modalButton = document.querySelector('.modal-button');
const modalInfo = document.querySelector('.email-modal-info');

// // ==== toggle menu buttons ===== // //
toggleClose.style.display = 'none'

$(function() {
    $('.toggle-menu').click(function() {
        $('.toggle-close').show(100);
        $('.toggle-menu').hide(100);
        $('.menu-items').slideDown('slow');
        $('.logo').hide(100);
    }) 
})

$(function() {
    $('.toggle-close').click(function() {
        $('.toggle-close').hide(100);
        $('.toggle-menu').show(100);
        $('.menu-items').slideUp('slow');
        setTimeout(() => {
            $('.logo').show(100);
        }, 500);
    });
});


// Modal control

setTimeout(() => {
    emailModal.classList.add('email-modal-visible');
}, 3000);

modalClose.addEventListener('click', () => {
    emailModal.classList.remove('email-modal-visible');
})


const emailInput = `<div class="flex flex-col justify-center w-full h-full">
    <input type="email" placeholder="Your Email" class="p-2 text-[#424D5B] joinEmail">
    <input type="submit" class="bg-[#f3cec8] text-black cursor-pointer p-2 px-8 rounded-md font-bold my-3 uppercase emailButton outline-0 text-center" value="JOIN">
    </div>
    `

const sendEmail = () => {    
     modalInfo.innerHTML = emailInput;   
     document.querySelector('.emailButton').addEventListener('click', () => {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.querySelector('.joinEmail').value)) {
            emailModal.innerHTML = `<h2 class="text-white text-3xl p-10 text-center bg-black">Thank you! Please check your email for our 20% off code!</h2>`
            setTimeout(() => {
               emailModal.classList.remove('email-modal-visible');
            }, 3000);
        }         
     })
};

modalButton.addEventListener('click', sendEmail);




// emailButton.addEventListener('click', () => { 

//     if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(joinEmail.value)) {
//         modalInfo.innerHTML = `<h2>Thank you! Please check your email for our perks</h2>`    
//     }
    
// })






           











 





