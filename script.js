const lyricData = [
    { text: "My", time: 0.52 },
    { text: "baby~", time: 1.36 },
    { text: "I", time: 2.60 },
    { text: "love", time: 3 },
    { text: "you", time: 3.17 },
    { text: "so", time: 3.81 },
    { text: "much", time: 4.0 },
    { text: "forever", time: 4.48 },
    { text: "you", time: 5 },
    { text: "and", time: 5.51 },
    { text: "I", time: 5.81 },
    { text: "I", time: 6.36  },
    { text: "love", time: 6.61 },
    { text: "you", time: 7.0 },
    { text: "oh~", time: 7.92 },
    { text: "I", time: 8.40 },
    { text: "love", time: 8.55 },
    { text: "you", time: 8.60 },
    { text: "so", time: 9 },
    { text: "much", time: 9.75 },
    { text: "forever", time: 10},
    { text: "you", time: 10.55 },
    { text: "and", time: 11 },
    { text: "I", time: 11.5 },
    { text: " ", time: 12.0 },
];

const lyricElement = document.getElementById('lyrics');
const audio = document.getElementById('audio');
let currentIndex = 0;
let isPaused = false;

function showLyrics() {
    const currentLyric = lyricData[currentIndex];
    lyricElement.textContent += currentLyric.text + ' ';
    currentIndex++;
    if (currentIndex < lyricData.length) {
        const nextLyricTime = lyricData[currentIndex].time;
        const currentAudioTime = audio.currentTime;
        const delay = (nextLyricTime - currentLyric.time) * 1000;
        setTimeout(showLyrics, delay);
    } else {
        currentIndex = 0; // Reset lại từ đầu
        const delay = lyricData[0].time * 1000; // Lấy thời gian của lời bài hát đầu tiên
        setTimeout(showLyrics, delay);
    }
}

audio.addEventListener('ended', function() {
    currentIndex = 0; // Reset lại từ đầu
    lyricElement.textContent = ''; // Xóa nội dung lời bài hát
    audio.currentTime = 0; // Đặt thời gian của audio về 0 để chuẩn bị cho lần phát tiếp theo
});

lyricElement.addEventListener('click', function() {
    if (audio.paused) {
        audio.play(); // Nếu audio đang dừng, bắt đầu phát
        isPaused = false;
    } else {
        audio.pause(); // Nếu audio đang phát, dừng lại
        isPaused = true;
    }
});

audio.addEventListener('play', function() {
    if (!isPaused) {
        showLyrics(); // Bắt đầu hiển thị lời bài hát khi audio được phát
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Lấy đối tượng âm thanh
    const audio = document.getElementById('audio');
    
    // Trì hoãn việc bật âm thanh sau 0.5 giây
    setTimeout(function() {
        audio.play();
    }, 500); // 500 milliseconds = 0.5 giây
});

