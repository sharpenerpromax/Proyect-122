function preload(){

}

function setup(){
    canvas = createCanvas(650,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = ""

}

function draw(){
    image(video,0,0,650,480);
    tint(tint_color);

    fill(204, 101, 192, 255);
  stroke(127, 63, 120);
  ellipse(100, 60, 80, 80);
  ellipse(100, 400, 80, 80);
  ellipse(550, 60, 80, 80);
  ellipse(550, 400, 80, 80);

  fill(200, 101, 1, 255);
  rect(100, 40, 450, 35);
  rect(100, 380, 450, 35);
  rect(80, 40, 35, 380);
  rect(550, 40, 35, 380);
}

function filter_tint(){
    tint_color= document.getElementById("color_name").value;
}

function take_snapshot(){
    save("Ana.png")
}