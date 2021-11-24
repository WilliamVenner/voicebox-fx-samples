const autoplay = document.location.hash.trim().replace(/^#/, '').trim().toLowerCase();
if (autoplay) {
	document.querySelectorAll('.sample').forEach(sample => {
		if (sample.textContent.trim().toLowerCase() === autoplay) {
			sample.parentElement.querySelector('audio.fx').play();
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