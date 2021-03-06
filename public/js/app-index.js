const spiral = document.querySelector(".spiral");

//set the default width and height of the svg
const dimension = parseInt(Math.max(screen.width, screen.height) * 1.3);
console.log(dimension);
spiral.style.height = dimension + "px";
spiral.style.width = dimension + "px";

//connecting to the sliders
// document.querySelector(".slider__dimension").oninput = function () {
//     changeDimension(parseInt(this.value));
// };

//playing the sound

document.querySelector(".toggle").addEventListener("click", () => {
    const btn = document.querySelector(".toggle__icon");
    if (btn.id === "playing") {
        console.log("stopped play");
        const audio = document.querySelector("audio");
        audio.pause();
        btn.src = "/css/img/sound_close.png";
        btn.removeAttribute("id");
    } else if (document.readyState === "complete" || document.readyState === "loaded") {
        console.log("started play");
        const audio = document.querySelector("audio");
        btn.src = "/css/img/sound_open.png";
        audio.volume = 1;
        btn.id = "playing";
        audio.play();
    }
});

//DOM functions
// changeDimension = newDimension => {
//     console.log(spiral.style.height);
//     newDimension *= 10;
//     spiral.style.height = (spiral.style.height+newDimension) + "px";
//     spiral.style.width = (spiral.style.width+newDimension) + "px";
// };

/////////////////////////////toggle button//////////////////////////////////////

// visible = false;

// document.querySelector(".toggle").addEventListener("click", () => {
//     if (!visible) {
//         document.querySelector(".toggle").style.transform = "rotate(180deg)";
//         document.querySelector(".slider").style.animation = "fadeIn 2s forwards";
//     } else {
//         document.querySelector(".toggle").style.transform = "rotate(0deg)";
//         document.querySelector(".slider").style.animation = "fadeOut 2s forwards";
//     }
//     visible = !visible;
// });
