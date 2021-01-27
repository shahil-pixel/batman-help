

function preload(){
    
}

function setup(){
createCanvas(displayWidth,displayHeight);
    
}

function draw(){
    
    for(var i =0;i<maxDrops;i++){
        maxDrops.push(new Drop(random(0,400),random(0,400)))
    }
}   

