var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("hole");

hole.addEventListener('animationiteration', () => {
var random = -((Math.random()*300)+150);
hole.style.top = random + "px";
});

setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
},10);
