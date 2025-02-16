
function openWebsite() {
  document.querySelector(".letter").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".letter").classList.add("hidden");
    document.querySelector(".content").classList.remove("hidden");
    document.querySelector(".content").style.opacity = "1";
    document.querySelector(".content").style.transform = "scale(1)";
    document.body.style.backgroundColor = "#ffffff";
  }, 500);
}



document.addEventListener("DOMContentLoaded", function () {
  const starsContainer = document.createElement("div");
  starsContainer.classList.add("stars");
  document.body.appendChild(starsContainer);

  function createStar() {
      const star = document.createElement("div");
      star.classList.add("star");
      
      // Random position based on full document height
      const scrollableHeight = document.documentElement.scrollHeight;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * scrollableHeight;

      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random flicker speed
      starsContainer.appendChild(star);

      // Remove after animation
      setTimeout(() => {
          star.remove();
      }, 3000);
  }

  // Generate stars at intervals
  function generateStars() {
      for (let i = 0; i < 100; i++) { // Adjust the number of stars
          createStar();
      }
  }

  // Update stars when scrolling
  window.addEventListener("scroll", generateStars);
  window.addEventListener("resize", generateStars);
  
  generateStars(); // Initial load
});

document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("background-music");
  // Ensure autoplay works after user interaction
  document.body.addEventListener("click", function() {
      audio.play();
  }, { once: true }); // Only triggers once
});