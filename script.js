document.addEventListener("DOMContentLoaded", function() {
    var balloon = document.querySelector('.balloon');
    var cloud = document.querySelector('.clouds');

    var balloonPosition = -200; // Initial position of the balloon
    var cloudPosition = -200; // Initial position of the clouds

    var animationSpeed = 0.2; // Speed of the animation, adjust as needed

    function updatePositions() {
        balloon.style.left = balloonPosition + 'px';
        cloud.style.top = cloudPosition + 'px';
    }

    function moveElements() {
        balloonPosition += 1 * animationSpeed; // Adjust the speed as needed
        cloudPosition += 0.5 * animationSpeed; // Adjust the speed as needed

        updatePositions();
    }

    setInterval(moveElements, 20); // Adjust the interval as needed
});

document.addEventListener("DOMContentLoaded", function() {
    var balloon = document.querySelector('.balloon');
    var cloud = document.querySelector('.clouds');

    var balloonPosition = -200; // Initial position of the balloon
    var cloudPosition = -200; // Initial position of the clouds

    var animationSpeed = 0.2; // Speed of the animation, adjust as needed

    function updatePositions() {
        balloon.style.left = balloonPosition + 'px';
        cloud.style.top = cloudPosition + 'px';

        // Adjust the window scroll position to keep the balloon in view
        window.scroll(balloonPosition, 0);
    }

    function moveElements() {
        balloonPosition += 3 * animationSpeed; // Adjust the speed as needed
        cloudPosition += 0.5 * animationSpeed; // Adjust the speed as needed

        updatePositions();
    }

    setInterval(moveElements, 20); // Adjust the interval as needed
});