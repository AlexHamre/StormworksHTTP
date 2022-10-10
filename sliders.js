const sliders = document.querySelectorAll(".slider-wrapper");

sliders.forEach(slider => {
    slider.addEventListener("input", ()=>{
        slider.lastElementChild.innerHTML = slider.firstElementChild.value
        console.log(slider.id)

        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "/?val"+ slider.id +"="+ slider.firstElementChild.value, true);
        xhttp.send();
    })
});
