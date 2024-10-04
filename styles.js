const container = document.getElementById('itemContainer');

// Function to create and drop an item
function createFallingItem() {
    // const item = document.createElement('div');
    // item.classList.add('falling-item');

    const item = document.createElement('img');
    item.classList.add('falling-item');
    item.src = "image-removebg-preview (1).png";

    // Set random horizontal position
    item.style.left = Math.random() * 100 + 'vw';

    // Add animation to item
    item.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;

    container.appendChild(item);

    // Remove the item after animation completes
    setTimeout(() => {
        item.remove();
    }, 5000);
}

// Generate items at regular intervals
setInterval(createFallingItem, 400);


document.addEventListener("DOMContentLoaded", function () {
    const texts = [
        "Ini hadiah untuk awak tau !!",
        "Saya buat ini, awak baca tau !!",
        "Janji jangan nangis, OKAYY !!",
        "Saya sangat bersyukur memiliki awak dalam hidup saya. Setiap hari, awak membuat hidup saya lebih indah.",
        "Terima kasih kerana selalu ada untuk saya, mendengarkan dan memahami tanpa perlu saya berkata banyak.",
        "Awak adalah sumber kekuatan dan kebahagiaan saya. Saya sangat menghargai semua yang awak lakukan, besar atau kecil.",
        "Saya bangga dengan semua pencapaian awak dan betapa kerasnya awak berusaha. Awak benar-benar menginspirasi saya.",
        "Tak ada kata-kata yang cukup untuk menggambarkan betapa berharganya diri awak dalam hidup saya. Awak adalah segalanya bagi saya.",
        "Setiap detik yang saya habiskan dengan awak adalah detik yang penuh makna. Terima kasih kerana selalu membuat saya merasa dicintai.",
        "Saya menghargai kebaikan, kesabaran, dan kasih sayang yang awak tunjukkan setiap hari. Awak adalah anugerah dalam hidup saya.",
        "Awak tidak hanya cantik dari luar, tapi juga dari dalam. Saya sangat menghargai semua kebaikan dan cinta yang awak berikan.",
        "Terima Kasih, CANTIK <3"
    ]; // Array of texts to be typed out

    const typingText = document.getElementById("para1");
    const countdownDisplay = document.getElementById("counter"); // Added for countdown display
    const img = document.getElementById('image');
    const btn = document.getElementById('btn');
    const backgroundMusic = document.getElementById("backgroundMusic"); // Audio element
    const card = document.getElementById('card');

    let index = 0;
    let textIndex = 0;
    const typingSpeed = 40; // Typing speed in milliseconds
    // const pauseTime = 5000; // Pause time between texts in milliseconds

    // Function to play the background music
    function playBackgroundMusic() {
        backgroundMusic.play();
    }
    
    function type() {
        if (index < texts[textIndex].length) {
            typingText.innerHTML += texts[textIndex].charAt(index);
            index++;
            setTimeout(type, typingSpeed);
            img.src = "s_"+ textIndex +".jpeg";
        } else {
            // After typing one text, start the countdown before the next text
            if(textIndex <= 2){
                startCountdown(5000 / 1000); // Convert milliseconds to seconds for countdown
            }else{
                startCountdown(7000 / 1000); // Convert milliseconds to seconds for countdown
            }
        }
    }

    function startCountdown(seconds) {
        countdownDisplay.style.display = "block"; // Show countdown display
        countdownDisplay.innerHTML = `Next in ${seconds}`;

        const interval = setInterval(() => {
            seconds--;
            if (seconds > 0) {
                countdownDisplay.innerHTML = `Next in ${seconds}`;
            } else {
                clearInterval(interval);
                countdownDisplay.style.display = "none"; // Hide countdown display after countdown
                textIndex++;

                if(textIndex == texts.length){
                    backgroundMusic.muted = true;
                    card.innerHTML = `<video id="myVideo" width="200" autoplay>
                    <source src="vid_sayang.mp4" type="video/mp4">
                </video><br>
                <p style="font-size: 20px;" id="theendtxt"></p>
                <br><p style="font-size: 10px;" id="theendtxt2"></p>`;

                    document.getElementById('theendtxt').innerText = "THE END";
                    document.getElementById('theendtxt2').innerText = "-  only the video will end but not for us  -";
                }

                if (textIndex < texts.length) {
                    index = 0;
                    typingText.innerHTML = ""; // Clear the text for the new line
                    type();
                }
            }
        }, 1000);
    }

    // Start typing animation
    type();
    playBackgroundMusic(); // Play the music when the document is loaded

});
