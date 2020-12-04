
let videos01;
let nickelodeonArray = [];
let videos01Array = [];

var cnv;



function preload() {

  videos01Array[0] = createVideo('_videos/_nickelodeon/nick_bumper_01.mp4');
  videos01Array[1] = createVideo('_videos/_nickelodeon/nick_bumper_02.mp4');
  videos01Array[2] = createVideo('_videos/_nickelodeon/nick_bumper_03.mp4');
	
}



function setup() {

	cnv = createCanvas(800, 600);
	centerCanvas();

	imageMode(CENTER);
	rectMode(CENTER);
	colorMode(RGB);

}



function centerCanvas() {

  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

}



function windowResized() {
  centerCanvas();
}



function draw() {
	
	background(0,0,0);
	
	for(let i = 0; i < nickelodeonArray.length; i++) {
		nickelodeonArray[i].display();
	}
	
}



function mousePressed() {
	
	let videos01 = videos01Array;
	let p = random(videos01);
	
	let newNickelodeon = new Nickelodeon(p, width/2, height/2);
	nickelodeonArray.push(newNickelodeon);
	
}



class Nickelodeon {

	constructor(p, x, y) {
		
		this.p = p;
		this.x = x;
		this.y = y;
		this.w = 400;
		this.h = 300;
		
	}
	
	display() {
		
		// IMAGE
		
		for(let i = 0; i < videos01Array.length; i++) {
			image(this.p, this.x, this.y, this.w, this.h);
		}

		stroke(235,226,210);
			strokeWeight(6);
			noFill();
			rect(this.x,this.y, this.w, this.h);
		
	}

}