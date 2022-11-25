const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
//END SECTION

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
const scene = new ScrollMagic.Scene({
    duration: 132000,
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicator()
    .setPin(intro)
    .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos/1000;
    console.log(e);
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = scrollpos;
}, 40);
