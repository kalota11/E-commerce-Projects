
  function startFlashSaleTimer() {
        // Add 3 days from current time
        let end = new Date();
        end.setDate(end.getDate() + 3);

        function update() {
            let now = new Date();
            let diff = end - now;

            if (diff <= 0) {
                document.getElementById("days").textContent = "00";
                document.getElementById("hours").textContent = "00";
                document.getElementById("minutes").textContent = "00";
                document.getElementById("seconds").textContent = "00";
                return;
            }

            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById("days").textContent = String(days).padStart(2, "0");
            document.getElementById("hours").textContent = String(hours).padStart(2, "0");
            document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
            document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
        }

        update(); // run immediately
        setInterval(update, 1000);
    }

    // Start timer when page loads
    startFlashSaleTimer();

const track = document.querySelector(".flash-products");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let index = 0;

function moveCarousel() {
    const cardWidth = track.children[0].offsetWidth + 20; 
    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.onclick = () => {
    if (index < track.children.length - 4) {   // show 4 cards on screen
        index++;
        moveCarousel();
    }
};

prevBtn.onclick = () => {
    if (index > 0) {
        index--;
        moveCarousel();
    }
};
