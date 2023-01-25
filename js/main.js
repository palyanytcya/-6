
const videoBtn = document.querySelector('#video_match_btn');
const videoMatch = document.querySelector('#video_match')
const videoBtnIcon = document.querySelector('#video_match_btn_icon');
const videoOverlay = document.querySelector('#story_video_overlay');
const videoFile = document.querySelector('#match_video');


videoBtn.addEventListener('click', function (){

    function toggleOverlay(event){
        if (event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden');
        } else {
            videoOverlay.classList.remove('hidden');
        }
    }


    if (videoFile.paused) {
        videoFile.play();
        videoBtnIcon.src = './images/main/experience/video/pause-white.svg';

        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;


    } else {
        videoFile.pause();
        videoBtnIcon.src = './images/main/experience/video/play-white.svg';

        videoOverlay.onmouseleave = null;
    }

})



