let previousPosition = window.pageYOffset;
window.onscroll = function() {
	const currentPosition = window.pageYOffset;
	if (previousPosition > currentPosition) {
		document.querySelector('header').style.top = '0';
	} else {
		document.querySelector('header').style.top = '-60px';
	}
	previousPosition = currentPosition;
}