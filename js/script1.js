// Toggle class active //
const menu = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav1');

//ketika hamburger menu di klik //
document.querySelector('#hamburger-menu').onclick = () => {
	navbarNav.classList.toggle('active');
};

//klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
	if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
		navbarNav.classList.remove('active');
	}
});

//rotate hamburger menu
menu.onclick = () =>{
	menu.classList.toggle('fa-times');
	navbarNav.classList.toggle('active');
};


