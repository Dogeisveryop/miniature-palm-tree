img = "";
status = "";
object = [];
function setup(){
    canvas = createCanvas(600 , 400);
    canvas.center();
    cocomodel = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Detecting objects";
}

function modelloaded() {
    console.log("Model is loaded");
    status = true ;
    cocomodel.detect(img,gotresults);
}

function gotresults(error,results) { 
    if (error) {
        console.log(error);
    }
     console.log(results);
    object = results ;
}

function preload(){
    img = loadImage("kitchens-4.jpg");
    
}

function draw(){
    image(img,0,0,600,400);
    if (status != "") {
      for ( i = 0; i < object.length; i++) {
        document.getElementById("status").innerHTML = " Objects detected " ;

       fill("lime");
       stroke("black");
       percent = floor(object[i].confidence*100);
       text(object[i].label+" "+percent+"%",object[i].x,object[i].y-10);
       noFill();
       rect(object[i].x,object[i].y,object[i].width,object[i].height);
      }

    }
}

function bck() {
    window.location("index.html")
}