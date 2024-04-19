const lyrics = "My baby I love you so much forever you and I I love you oh I love you so much forever you and I";
const lyricElement = document.getElementById('lyrics');
const audio = document.getElementById('audio');
let index = 0;

function showLyrics() {
    if (index < lyrics.length) {
        lyricElement.innerHTML += lyrics[index];
        index++;
        setTimeout(showLyrics, 200); // Thay đổi giá trị timeout tùy theo tốc độ muốn hiển thị chữ
    }
}

audio.addEventListener('play', showLyrics);
