var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
// Initialize video element and turn off autoplay and looping
window.addEventListener("load", function() {
    const video = document.querySelector("video");
    video.autoplay = false;
    video.loop = false;
    
    // Display current runtime of the video
    video.addEventListener("timeupdate", function() {
        console.log("Current time: " + video.currentTime);
        // Optionally, you could display this time on the page as well
        // by modifying a specific element
        // For example: document.getElementById('currentTimeDisplay').textContent = video.currentTime;
    });

    // Get other necessary elements
    const playButton = document.querySelector("#play");
    const pauseButton = document.querySelector("#pause");
    const slowerButton = document.querySelector("#slower");
    const fasterButton = document.querySelector("#faster");
    const skipButton = document.querySelector("#skip");
    const muteButton = document.querySelector("#mute");
    const slider = document.querySelector("#slider");

    // Play Button
    playButton.addEventListener("click", function() {
        video.play();
        console.log("Video playing");
        updateVolumeInfo();
    });

    // Pause Button
    pauseButton.addEventListener("click", function() {
        video.pause();
        console.log("Video paused");
    });

    // Slow Down
    slowerButton.addEventListener("click", function() {
        video.playbackRate -= 0.1; // Reducing speed by 10%
        console.log("New speed: " + video.playbackRate);
        updateVolumeInfo();
    });

    // Speed Up
    fasterButton.addEventListener("click", function() {
        video.playbackRate += 0.1; // Increasing speed by 10%
        console.log("New speed: " + video.playbackRate);
        updateVolumeInfo();
    });

    // Skip Ahead
    skipButton.addEventListener("click", function() {
        if (video.currentTime + 10 < video.duration) {
            video.currentTime += 10;
        } else {
            video.currentTime = 0;
        }
        console.log("Current location: " + video.currentTime);
        updateVolumeInfo();
    });

    // Mute Button
    muteButton.addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            muteButton.textContent = 'Mute';
        } else {
            video.muted = true;
            muteButton.textContent = 'Unmute';
        }
    });

    // Volume Slider
    slider.addEventListener("input", function() {
        video.volume = slider.value / 100;
        updateVolumeInfo();
    });

    function updateVolumeInfo() {
        // Update volume information
        console.log("Volume: " + video.volume * 100 + "%");
    }

    // OldSchool class button
    const oldSchoolButton = document.querySelector("#vintage");
    oldSchoolButton.addEventListener("click", function() {
        video.classList.add('oldSchool');
    });

    // Original class button
    const originalButton = document.querySelector("#orig");
    originalButton.addEventListener("click", function() {
        video.classList.remove('oldSchool');
    });
});

