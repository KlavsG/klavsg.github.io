let sliderBtnRight = document.getElementsByClassName("slider-btn-right");
let sliderBtnLeft = document.getElementsByClassName("slider-btn-left");
let slide = document.getElementById("slide");
let btnLeftOff = document.getElementById("btn-left");
let btnLeftOn = document.getElementById("btn-left-dark");
let btnRightOff = document.getElementById("btn-right-light");
let btnRightOn = document.getElementById("btn-right");
let moveText = -600;
let pos = 0;



sliderBtnLeft[0].onclick=function () {
    if (pos!==0){
    pos = pos-1;
    }
    if (pos===0) {
        btnLeftOff.style.display = 'inline-block';
        btnLeftOn.style.display = 'none';
    }
    if (pos!==2) {
        btnRightOff.style.display = "none";
        btnRightOn.style.display = "inline-block";
    }
    slide.style.transform = `translatex(${(moveText*pos)}px)`;
}

sliderBtnRight[0].onclick=function () {
    if (pos!=2){
    pos = pos+1;
    }
    if (pos>0) {
        btnLeftOff.style.display = 'none';
        btnLeftOn.style.display = "inline-block";
    }
    if (pos===2) {
        btnRightOff.style.display = "inline-block";
        btnRightOn.style.display = "none";
    }
    slide.style.transform = `translatex(${(moveText*pos)}px)`;
}


