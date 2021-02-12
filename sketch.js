let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
  
  bubble1 = new Bubble("OwO",300,200,random(255),random(255),random(255),1);
  
  bubble2 = new Bubble("UwU",random(600), random(400),random(255),random(255),random(255),3);
}

function draw() {
  background(0);
  
  bubble1.show();
  bubble2.show();
}