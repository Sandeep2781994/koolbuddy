window.onload = function () {
	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}

// function addClass() {
// 	const element = document.getElementById("body");
// 	element.classList.add("fixed-position");
// }




// Get the button, and when the user clicks on it, execute the function we set here
document.getElementById("mybtn").onclick = function() {myFunction(); colorchange()};
/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
	document.getElementById("body").classList.toggle("fixed");
}

function colorchange() {
	document.getElementById("logo").classList.toggle("color");
}

