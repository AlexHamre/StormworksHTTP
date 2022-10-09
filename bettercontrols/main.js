const sliders = document.querySelectorAll(".slider-wrapper");

sliders.forEach(slider => {
    slider.addEventListener("input", ()=>{
        slider.lastElementChild.innerHTML = slider.firstElementChild.value
    })
});
