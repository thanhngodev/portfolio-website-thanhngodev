const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const menuBar = [
	{href: "#hero", after: "Home", label: 'Home'},
	{href: "#services", after: "Service", label: 'Services'},
	{href: "#projects", after: "Projects", label: 'Projects'},
	{href: "#about", after: "About", label: 'About'},
	{href: "#contact", after: "Contact", label: 'Contact'},
]

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 100) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



$(document).ready(function() {
	// build logo
	$('#logo').html(`
		<h1><span>T</span>hanh <span>N</span>go <span>D</span>ev</h1>
	`)

	// build menu bar
	let menuBarHtml = ""
	for(let data of menuBar) {
		menuBarHtml += `<li><a href="${data.href}" data-after="${data.after}">${data.label}</a></li>`;
	}
	$("#menu-bar").html(menuBarHtml);

	// build banner content
	$('#banner-content').html(`
		<h1>Hello, <span></span></h1>
		<h1>My Name is <span></span></h1>
		<h1>Ngo Tan Thanh <span></span></h1>
		<a href="#projects" type="button" class="cta">Portfolio</a>
	`);

	initcheckPackageNameHeight('.service-item')
})

function initcheckPackageNameHeight(_clsName) {
    setTimeout(() => {
        var listEle = document.querySelectorAll(_clsName);
        if (listEle.length > 0) {
            var maxHeight = 0;
            listEle.forEach(function (ele) {
                maxHeight = ele.clientHeight > maxHeight ? ele.clientHeight : maxHeight;
            });
            $(_clsName).css({
                'transition': 'all 0.23s linear',
                'height': 'unset',
                'min-height': maxHeight + 'px'
            });
        }
    }, 230);
}