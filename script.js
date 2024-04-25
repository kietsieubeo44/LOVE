// Tạo một hàm để hiển thị văn bản tại thời điểm cụ thể
function displayTextAtTime(text, time) {
    setTimeout(function() {
        console.log(text); // Thay console.log bằng phương thức hiển thị văn bản của bạn
    }, (time - 1) * 1000); // Đổi time - 1 vì setTimeout sẽ gọi hàm sau time (ms)
}

// Mảng chứa dữ liệu văn bản và thời gian
const lyricData = [
    { text: "", time:0 },
    { text: "Sài Gòn ngày xưa", time: 25.8 },
    { text: "Ấp ủ tình yêu của anh từ những thế kỉ trước", time: 27.5 },
    { text: "Anh có thể làm những điều tuyệt vời", time: 29.85 },
    { text: "Mà bản thân họ chẳng thể nào nghĩ được", time: 31.85 },
    { text: "Sài Gòn ngày xưa", time: 33 },
    { text: "Là những cuộc chiến", time: 34 },
    { text: "Nhưng không thể diết được tình Yêu (Cho Ngọc)", time: 35 },
    // Thêm các đối tượng khác tại các thời điểm khác nếu cần
];

// Duyệt qua mảng lyricData và hiển thị văn bản tại các thời điểm tương ứng
lyricData.forEach(function(lyric) {
    displayTextAtTime(lyric.text, lyric.time);
});


// Kiểm tra xem có dữ liệu về số lượng người xem trong localStorage không
let views = localStorage.getItem('views');

if (!views) {
    // Nếu không có dữ liệu, khởi tạo số lượng người xem là 1
    views = 1;
} else {
    // Nếu có dữ liệu, tăng số lượng người xem lên 1
    views = parseInt(views) + 1;
}

// Lưu số lượng người xem vào localStorage
localStorage.setItem('views', views);

// Hiển thị số lượng người xem lên trang web
document.getElementById('view-count').textContent = views;


const lyricElement = document.getElementById('lyrics');
const audio = document.getElementById('audio');
let currentIndex = 0;
let loopCount = 0; // Biến để theo dõi số lần đã lặp

function showLyrics() {
    const currentLyric = lyricData[currentIndex];
    const wordSpan = document.createElement('span');
    wordSpan.textContent = currentLyric.text + ' ';
    lyricElement.appendChild(wordSpan);
    currentIndex++;

    // Xóa câu trước khi thêm câu mới
    if (currentIndex > 1) {
        lyricElement.removeChild(lyricElement.firstChild);
    }

    if (currentIndex < lyricData.length) {
        const nextLyricTime = lyricData[currentIndex].time;
        const currentAudioTime = audio.currentTime;
        const delay = (nextLyricTime - currentLyric.time) * 1000;
        setTimeout(showLyrics, delay);
    } else {
        currentIndex = 0; // Reset lại từ đầu sau khi hiển thị hết lời bài hát
    }

    // Đẩy lên sau khi hiển thị một câu
    if (currentIndex > 0 && currentIndex < lyricData.length) {
        const previousLyricTime = lyricData[currentIndex - 1].time;
        const currentAudioTime = audio.currentTime;
        const pushDelay = (currentLyric.time - previousLyricTime) * 1000;
        setTimeout(pushLyricsUp, pushDelay);
    }
}


function pushLyricsUp() {
    lyricElement.classList.add('fade-out'); // Add the fade-out class
    setTimeout(() => {
        // lyricElement.textContent = ''; // Remove this line to keep the lyrics visible
        lyricElement.classList.remove('fade-out'); // Remove the fade-out class
        lyricElement.style.transform = "none"; // Reset the transform
    }, 1300); // Waiting time, similar to the transition time
}



audio.addEventListener('play', function() {
    currentIndex = 0;
    lyricElement.textContent = '';
    loopCount = 0; // Reset lại số lần lặp khi bắt đầu phát audio
    showLyrics();
});

document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('audio');
    setTimeout(function() {
        audio.play();
    }, 500); // 500 milliseconds = 0.5 seconds
});
audio.addEventListener('ended', function() {
    // Clear all displayed lyrics
    lyricElement.textContent = '';

    // Display "I love you" with heart effect
    const loveYouText = document.createElement('span');
    loveYouText.textContent = "I love you ";
    loveYouText.classList.add('love-you-text', 'glowing-text'); // Add both classes for styling and glow effect
    const heartIcon = document.createElement('span');
    heartIcon.innerHTML = "&hearts;";
    heartIcon.style.color = "#FF007F"; // Set màu hồng của nhóm Blackpink cho hình trái tim
    // Customize the heart color if needed
    loveYouText.appendChild(heartIcon);
    lyricElement.appendChild(loveYouText);
});




/*document.addEventListener("DOMContentLoaded", function() {
    // Lấy đối tượng âm thanh
    const audio = document.getElementById('audio');
    
    // Trì hoãn việc bật âm thanh sau 0.5 giây
    setTimeout(function() {
        audio.play();
    }, ); // 500 milliseconds = 0.5 giây
});
*/

