document.addEventListener("DOMContentLoaded", function() {
    const starContainer = document.querySelector('.stars');

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Rastgele pozisyon ve animasyon süresi
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const delay = Math.random() * 5; // 0 ile 5 saniye arasında rastgele bir gecikme
        const colors = ['#ffdd00', '#00ffcc', '#ff4d00', '#ff006e', '#00e7ff']; // Renkler

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        star.style.animationDelay = `${delay}s`;

        starContainer.appendChild(star);
    }

    const typewriterText = "Coming Soon...";
    const typewriterElement = document.getElementById("typewriter");
    let index = 0;
    let forward = true;

    function typeWriter() {
        if (forward) {
            if (index < typewriterText.length) {
                typewriterElement.textContent += typewriterText.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            } else {
                forward = false;
                setTimeout(typeWriter, 10000); // Tamamlandıktan sonra 10 saniye bekle
            }
        } else {
            if (index > 0) {
                typewriterElement.textContent = typewriterElement.textContent.slice(0, -1);
                index--;
                setTimeout(typeWriter, 100);
            } else {
                forward = true;
                setTimeout(typeWriter, 100);
            }
        }
    }

    typeWriter();
});
