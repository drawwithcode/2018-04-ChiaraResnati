var decorativeBalls = [];
var myBall;
var score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBall = new Ball(width/2, random(200,height-200), 30);
  rectMode(CENTER)

  var decorativeBallNumber = 150;
  for (var i = 0; i < decorativeBallNumber; i++) {
    var myDecorativeBall = new decorativeBall(random(120,width-120), random(120,height-120), 30);
    decorativeBalls.push(myDecorativeBall);
  }
}

function draw() {
  background('black')
  fill('black')
  strokeWeight(10)
  stroke('white')
  rect (width/2, height/2, width-200, height-200)

  noStroke()
  myBall.move();
  myBall.display();
  rect(150, mouseY, 20, 100);
  textSize(30);
  text("Score: " + score, width-210, 80);
  fill('black')
  rect (150, 45, 95, 100)
  rect (150, height-45, 95, 100);
  fill('white')
  text("Move your mouse to play", 100, 80);
}
function decorativeBall(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = '#222';

  this.display = function ()  {
    fill(this.color)
    ellipse(this.x, this.y, this.diameter)
  }
}

function Ball(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = 'white';
  this.speed = 4;

  var yDir = 1;
  var xDir = 1;

  this.display = function ()  {
    fill(this.color)
    ellipse(this.x, this.y, this.diameter)
  }

  this.move = function () {
    this.x += this.speed * xDir;
    this.y += this.speed * yDir;

    if(this.y > height-120 || this.y < 120) {
      yDir = yDir * -1;
      this.speed += 0.2
    }

    if(this.x > width-120) {
      xDir = xDir * -1;
      this.speed += 0.2
    }

    if((this.x < 155) && ((this.x > 145) && (this.y < mouseY + 70) && (this.y > mouseY - 70))) {
      xDir = xDir * -1;
      score = score + 1;
      this.speed += 0.2
    }

    if(this.x < 120) {
      myBall = false;
      for(var j = 0; j < decorativeBalls.length; j++) {
        decorativeBalls[j].display();
      }

      fill('white')
      textSize(30);
      text('Click anywhere to restart', width/2 - 170, height/2 + 30);
      textSize(90);
      text('OH NO :(', width/2 - 190, height/2 - 30);
    }
  }
}



function mouseClicked() {
   location.reload()
}
