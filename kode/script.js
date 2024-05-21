// --------------- header ---------------
const nextHeader = document.querySelector(".header").nextElementSibling;
nextHeader.style.marginTop = '60px';

// --------------- share ---------------
const shareBtn = document.querySelector(".share");
const shareContent = document.querySelector(".header > .box > .content");

window.addEventListener("click", e => {
	if ( e.target == shareBtn ) {
		shareContent.classList.toggle("aktif");		
	}
	else{
		shareContent.classList.remove("aktif");
	}
});

// --------------- lazy loads ---------------
const images = document.querySelectorAll("img");
images.forEach(function(image) {
	image.setAttribute("loading", "lazy");
});

// --------------- footer credit ---------------
const tahun = new Date().getFullYear();
document.querySelector(".tahun").innerHTML = tahun;

// --------------- anti cheats ---------------
const forbiddenKeys = ['c', 'u', 's', 'p'];
const forbiddenKeyCodes = [123, 73, 74];

document.addEventListener("contextmenu", e => {
	e.preventDefault();
}, false);

document.addEventListener("keydown", e => {
	if (e.ctrlkey || forbiddenKeys.includes(e.key) || forbiddenKeyCodes.includes(e.keyCode)) {
		e.stopPropagation();
		e.preventDefault();
	};
});