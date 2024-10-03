const btnEl = document.querySelector(".btn")

const closeEl = document.querySelector(".close_icon")

const trailer_containerEl = document.querySelector(".trailer_container")

const videoEl = document.querySelector("video")

btnEl.addEventListener("click", () => {
    trailer_containerEl.classList.remove("active");
});

closeEl.addEventListener("click", () => {
    trailer_containerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});
