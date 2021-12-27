let burger = document.querySelector('.burger-menu');
let aside = document.querySelector('.menu');
let aside2 = document.querySelector('.right-aside-sticky');


burger.onclick = function() {
	burger.classList.toggle('active');
	aside.classList.toggle('active');
	aside2.classList.toggle('active');
}