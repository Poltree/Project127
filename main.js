music=""
music1=""
function setup(){
canvas = createCanvas(700,500)
camera = createCapture(VIDEO)
camera.hide()
canvas.center()
Model= ml5.poseNet(camera,modelLoaded)
Model.on("pose",getResults)
}
function draw(){
    image(camera,0,0,700,500);
    
}
function preload(){
    music=loadSound("ActualMusic.mp3")
}
function modelLoaded(){
    console.log("MODEL IS LOADED");
}
function getResults(results){
if(results.length > 0){
    console.log(results)

}
}
function PlayTheMusic(){
    music.play()
    music.setVolume(0.1)
    music.rate(2.5)
}
function StopMusic(){
    music.pause()
}