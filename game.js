document.addEventListener("DOMContentLoaded", function() {
  const player = document.getElementById("player");
  let isJumping = false;

  // Function to handle jumping
  function jump() {
    if (!isJumping) {
      isJumping = true;
      let jumpCount = 0;
      const jumpInterval = setInterval(function() {
        const jumpHeight = 40; // Adjust as needed
        const jumpDuration = 500; // Adjust as needed
        const gravity = 2; // Adjust as needed
        const newPosition = parseInt(player.style.bottom) + jumpHeight - gravity * jumpCount;
        if (newPosition > 0) {
          player.style.bottom = newPosition + "px";
          jumpCount++;
        } else {
          clearInterval(jumpInterval);
          jumpCount = 0;
          isJumping = false;
        }
      }, jumpDuration / (jumpHeight / 2));
    }
  }

  // Function to handle obstacles
  function createObstacle() {
    const obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    obstacle.style.left = "400px"; // Initial position
    document.getElementById("game-container").appendChild(obstacle);

    const obstacleMoveInterval = setInterval(function() {
      const obstaclePosition = parseInt(obstacle.style.left);
      if (obstaclePosition > -30) {
        obstacle.style.left = (obstaclePosition - 5) + "px"; // Adjust speed as needed
      } else {
        clearInterval(obstacleMoveInterval);
        obstacle.remove();
      }
    }, 20); // Adjust speed as needed
  }

  // Event listener for jump
  document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
      jump();
    }
  });

  // Start generating obstacles
  setInterval(createObstacle, 2000); // Adjust frequency as needed
});
