const $buttons = document.querySelectorAll("[data-button='video']");
const $videoFrame = document.querySelector(".video-frame");
const iframe = $videoFrame.children[0];

$buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

let videoOpen = false;

function handleClick(e) {
    videoOpen = true;
    const videoURL = e.target.getAttribute("videoRef");

    iframe.setAttribute("src", videoURL);
    $videoFrame.classList.add("active");
}

$videoFrame.addEventListener("click", (e) => {
    e.target.classList.remove("active");

    iframe.setAttribute("src", "");

    videoOpen = false;
});
