//connecting to the sliders
document.querySelector(".slider__height").oninput = function () {
    changeHeight(parseInt(this.value));
};
document.querySelector(".slider__width").oninput = function () {
    changeWidth(parseInt(this.value));
};

const spiral = document.querySelector(".spiral");

//DOM functions
changeHeight = newHeight => {
    newHeight += 100;
    spiral.style.height = newHeight + "%";
};

changeWidth = newWidth => {
    newWidth += 100;
    spiral.style.width = newWidth + "%";
};

/////////////////////////////toggle button//////////////////////////////////////

visible = false;

document.querySelector(".toggle").addEventListener("click", () => {
    if (!visible) {
        document.querySelector(".toggle").style.transform = "rotate(180deg)";
        document.querySelector(".slider").style.animation = "fadeIn 2s forwards";
    } else {
        document.querySelector(".toggle").style.transform = "rotate(0deg)";
        document.querySelector(".slider").style.animation = "fadeOut 2s forwards";
    }
    visible = !visible;
});
