const autoplay = document.location.hash.trim().replace(/^#/, '').trim().toLowerCase();
if (autoplay) {
	for (const sample of [...document.querySelectorAll('.sample')]) {
		if (sample.textContent.trim().toLowerCase().endsWith(' ' + autoplay)) {
			sample.parentElement.querySelector('audio.fx').play();
			break;
		}
	}
}

const audio = document.querySelectorAll('#content audio');
audio.forEach(evt => {
	evt.addEventListener('play', function() {
		audio.forEach(audio => {
			if (audio !== this) {
				audio.pause();
				audio.currentTime = 0;
			}
		});
	});
});