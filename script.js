const audio = document.getElementById('audio');
const text = document.getElementById('text');

audio.addEventListener('timeupdate', function() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const percentage = (currentTime / duration) * 100;
  text.style.left = percentage + '%';
});
