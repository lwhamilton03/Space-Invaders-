var x = 50;
var y = 90;
var xDirection = 0; 

function move(){
    if(window.event.keyCode == 65)
        {
            xDirection = -1; 
        }
    if(window.event.keyCode == 68)
        {
            xDirection = 1;
        }
    x += xDirection;
    document.getElementById('gun').style.left = x + "%";
}

function runner() {
   
    window.setInterval(createAsteroid,1000);
    window.setInterval(removeAsteroid,8000);
    window.setInterval(moveAsteroid, 500);
     
}

var numAsteroids = 0; 

function createAsteroid() {
    //console.log("Create Asteroid");
    var newSpawn = document.createElement("span");
    var newAsteroid = document.createTextNode("BIG*ASS*ASTEROID");
    var per = Math.random()*(100-0) + 0;

    newSpawn.appendChild(newAsteroid);
    //newSpawn.style.id = "asteroid" + numAsteroids; 
    newSpawn.style.position = "absolute";
    newSpawn.style.left = per + "%";
    newSpawn.style.top = 0 + "%"; 
    newSpawn.setAttribute("class", "asteroid");

    var spawn = document.getElementById("spawn");
    spawn.appendChild(newSpawn);
}

function removeAsteroid() {
   var asteroid = document.getElementsByClassName("asteroid");
    if(asteroid.length > 5) {
        //console.log("Delete Asteroid");
        document.getElementById("spawn").removeChild(asteroid[0]);
    }
}
function moveAsteroid() {
    var rock = document.getElementsByClassName("asteroid");
    for(i = 0; i < rock.length; i++)
        {
            
            console.log(rock[i]);
            var y = parseInt(rock[i].style.top);
            y += 1;
            rock[i].style.top = y + "%";
            console.log(rock[i].style.top);
        }
}


