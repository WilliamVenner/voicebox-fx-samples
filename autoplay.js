const autoplay = document.location.hash.trim().replace(/^#/, '').trim().toLowerCase();
if (autoplay) {
	document.querySelectorAll('#content > section').forEach(section => {
		if (section.querySelector('h1').textContent.trim().toLowerCase() === autoplay) {
			console.log('playing', section.querySelector('audio:nth-of-type(2)'));
			section.querySelector('audio:nth-of-type(2)').play();
			return false;
		}
	});
}

const audio = document.querySelectorAll('#content audio');
audio.forEach(evt => {
	evt.addEventListener('play', function() {
		console.log(audio);
		audio.forEach(audio => {
			if (audio !== this) {
				audio.pause();
				audio.currentTime = 0;
			}
		});
	});
});