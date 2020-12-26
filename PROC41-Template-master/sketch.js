

function preload(){
    
}

function setup(){
   background(400,400);
    var umbrella;

    var maxDrops=100;
    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }
}

function draw(){
    
}   
