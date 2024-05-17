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


page navbar - aside
pages navbar - header
all css in 1
make one mediaquery for all css attributes
change font-family
resume - a4
resume as link from #about (show resume)
articles
links
copy header, aside, footer - in all html (and next fix aside in each html)

!!!!!!!!! add addEventListener with header to bottom - for all links in all aside in all files (class)
!!! make padding and margin in em (not px)
hide navbar on scroll
responsive header
responsive topnav

fixed sidebar with full height
responsive sidebar

links from roadmap 