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

function keypress(event) {
    var x = event.key;
  if (x == "w"){
    sliders[0].firstElementChild.value ++
    sliders[0].lastElementChild.innerHTML ++
  }
  else if (x == "s"){
    sliders[0].firstElementChild.value --
    sliders[0].lastElementChild.innerHTML --
  }

  if (x == "a"){
    sliders[1].firstElementChild.value ++
    sliders[1].lastElementChild.innerHTML ++
  }
  else if (x == "d"){
    sliders[1].firstElementChild.value --
    sliders[1].lastElementChild.innerHTML --
  }
  }

const buttons = document.getElementsByClassName("button")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonClickFunction)
    console.log(buttons[i]);
}
clicked = []
function buttonClickFunction(){
    if (clicked[this.id] != true){
        clicked[this.id] = true
        this.style="background-color: white;"
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "/?bool"+ this.id +"="+ "1", true);
        xhttp.send();
    }
    else{
        clicked[this.id] = false
        this.style="background-color: red;"
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "/?bool"+ this.id +"="+ "0", true);
        xhttp.send();
    }
}