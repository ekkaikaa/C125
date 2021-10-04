noseX = 0 
noseY = 0
difference = 0
leftwristX = 0
rightwristX = 0

function preload() {

}

function setup() {
canvas = createCanvas(550,550);
canvas.position(560,150);
video = createCapture(VIDEO);
video.size(550,500);
posenet = ml5.poseNet(video,modelloaded);
posenet.on('pose', gotresults);
}

 function modelloaded() {
     console.log("model has been loaded succesfully");
 }

 function gotresults(results) {
  if (results.length > 0)  {
 console.log(results);
 noseX = results[0].pose.nose.x;
 noseY = results[0].pose.nose.y;
 console.log("noseX = " + noseX);
 console.log("noseY = " + noseY);
 leftwristX = results[0].pose.leftWrist.x;
 rightwristX = results[0].pose.rightWrist.x;
 difference = floor(leftwristX - rightwristX);
 console.log("leftwristX = " + leftwristX);
 console.log("rightwristX = " + rightwristX);
 console.log("difference = " + difference);
}
 }

function draw() {
background("plum");
fill("#9B72AA");
stroke("black");
square(noseX, noseY, difference);
document.getElementById("square_side").innerHTML = "width and height = " + difference + "px"; 
}