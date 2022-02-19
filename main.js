 song ="";
 function setup(){
   canvas = createCanvas(500,400);
   canvas.center();
   canvas.position(440,200);

   video = createCapture(VIDEO);
   video.hide();
}

function draw(){
    image(video,0,0,500,400);
}


function preload(){
    song = loadSound("lofi hip hop radio.mp3");
}

function play(){
song.play();
}