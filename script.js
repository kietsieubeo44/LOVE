const lyricData = [
    { text: "My", time: 0 },
    { text: "baby", time: 1 },
    { text: "I", time: 2 },
    { text: "love", time: 3 },
    { text: "you", time: 4 },
    { text: "so", time: 5 },
    { text: "much", time: 6 },
    { text: "forever", time: 7 },
    { text: "you", time: 8 },
    { text: "and", time: 9 },
    { text: "I", time: 10 },
  ];
  
  const lyricElement = document.getElementById('lyrics');
  const audio = document.getElementById('audio');
  let currentIndex = 0;
  
  function showLyrics() {
    const currentLyric = lyricData[currentIndex];
    lyricElement.textContent += currentLyric.text + ' ';
    currentIndex++;
    if (currentIndex < lyricData.length) {
      const nextLyricTime = lyricData[currentIndex].time;
      const currentAudioTime = audio.currentTime;
      const delay = (nextLyricTime - currentLyric.time) * 1000;
      setTimeout(showLyrics, delay);
    }
  }
  
  audio.addEventListener('play', showLyrics);
  