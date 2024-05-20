let previousPosition = window.pageYOffset;
let x = window.matchMedia('(max-width: 700px)');

window.onscroll = function() {
	const currentPosition = window.pageYOffset;
	if (previousPosition < currentPosition) {
		if (x.matches) {
			document.querySelector('header').style.top = '-4.5em';
		} else {
			document.querySelector('header').style.top = '-3em';
		}
	} else {
		document.querySelector('header').style.top = '0';
	}
	previousPosition = currentPosition;
}