var videocount = 1;
var player = document.getElementById('videoplaylist');
player.addEventListener('ended', dispositor);

function dispositor(x) {
    if (!x) { x = window.event; }
    videocount++;
    if (videocount > 2) { // last number of video playing in loop. 
        videocount = 1;
    }
    player.src = "vid-" + videocount + ".mp4";
}