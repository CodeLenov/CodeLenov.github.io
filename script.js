// ----------------------------------------------------------------------
// !!! hide header on scroll !!!

let previousPosition = window.pageYOffset;
let x700 = window.matchMedia('(max-width: 700px)');
let x500 = window.matchMedia('(max-width: 500px)');

window.onscroll = function() {

	const currentPosition = window.pageYOffset;

	if (previousPosition < currentPosition) {
		if (x500.matches) {
			document.querySelector('header').style.top = '-10em'; // 10em = header height in css for @media all and (max-width: 700px)
		} else if (x700.matches) {
			document.querySelector('header').style.top = '-5em'; // 5em = header height in css for @media all and (max-width: 500px)
		} else {
			document.querySelector('header').style.top = '-3em'; // 3em = header height in css
		}
	} else {
		document.querySelector('header').style.top = '0';
	}

	previousPosition = currentPosition;

}

// ----------------------------------------------------------------------
// !!! toggle aside !!!

const toggleAside = document.querySelector('#toggleAside');
const aside = document.querySelector('aside');
const main = document.querySelector('main');

toggleAside.addEventListener('click', () => {

	if (aside.style.display === 'none') {
		aside.style.display = 'block';
		main.style.marginRight = '7em';
	} else {
		aside.style.display = 'none';
		main.style.marginRight = '0';
	}

});