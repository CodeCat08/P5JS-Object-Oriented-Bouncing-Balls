class Bubble {
  
  /*
  Parameterized Constructor
  */
  constructor(name,x,y,r,g,b,speed) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.diameter = textWidth(name)*1.5;
    this.xspeed = speed;
    this.yspeed = speed;
  }
  
  /*
  This method moves the bubble by an input diplacement
  An edge case occured when a ball hit a corner just right
  in which the ball would get stuck and bounce outside of
  the canvas! A solution was found here: http://lagers.org.uk/blog/?p=122 
  */
  move()
  {
    if(this.x > width) {
      this.xspeed = this.xspeed * -1;
    }
    else if(this.x < 0) {
      this.xspeed = this.xspeed * -1;
    }
    
    if(this.y > height) {
      this.yspeed = this.yspeed * -1;
    }
    else if(this.y < 0) {
      this.yspeed = this.yspeed * -1;
    }
    
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  
  
  
  /*
  This method draws the bubble.
  */
  show() {
    noFill();
    strokeWeight(4);
    stroke(this.r,this.g,this.b);
    ellipse(this.x, this.y, this.diameter,this.diameter);
    
    strokeWeight(1);
    textSize(12);
    textFont("Lucida Console");
    text(this.name,this.x - (textWidth(this.name)/2),this.y);
    
    this.move();
  }
  
}