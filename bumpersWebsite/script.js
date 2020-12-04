
// NICKELODEON VARIABLES

let videos01;
let nickelodeonArray = [];
let videos01Array = []; 


// COMMERCIALS VARIABLES

let videos02;
let commercialsArray = [];
let videos02Array = [];


// CARTOON NETWORK VARIABLES

let videos03;
let cNetworkArray = [];
let videos03Array = [];


let tv;
let gui;
let t1, t2, t3;
var cnv;



function preload() {

	// videos01Array[0] = createVideo('https://jadapostadan.github.io/jadapostadan/bumpers/bumpersWebsite/_videos/nick_bumper_01.mp4');
 // 	videos01Array[1] = createVideo('nick_bumper_02.mp4');
 // 	videos01Array[2] = createVideo('nick_bumper_03.mp4');
 //  	videos01Array[3] = createVideo('nick_bumper_04.mp4');
 //  	videos01Array[4] = createVideo('nick_bumper_05.mp4');
	
	// videos02Array[0] = createVideo('commercial_01.mp4');
 // 	videos02Array[1] = createVideo('commercial_02.mp4');
 //  	videos02Array[2] = createVideo('commercial_03.mp4');
 //  	videos02Array[3] = createVideo('commercial_04.mp4');
	
	// videos03Array[0] = createVideo('cn_bumper_01.mp4');
 //  	videos03Array[1] = createVideo('cn_bumper_02.mp4');
 //  	videos03Array[2] = createVideo('cn_bumper_03.mp4');
 //  	videos03Array[3] = createVideo('cn_bumper_04.mp4');
 //  	videos03Array[4] = createVideo('cn_bumper_05.mp4');
	
	// tv = loadImage('https://jadapostadan.github.io/jadapostadan/bumpers/bumpersWebsite/_images/00sTv.png');
	
}



function setup() {
		
	cnv = createCanvas(displayWidth-100, displayHeight-200);
	centerCanvas();
	
	imageMode(CENTER);
	colorMode(RGB);
	
	gui = createGui();
	
	
	
	t1 = createToggle("CHANGE CHANNEL", 175,height-200,160,32);
	
	t1.setStyle({
		fillBgOn: color(255,0,255),
		rounding: 4,
		textSize: 15
	});
	
	
	
	t2 = createToggle("CHANGE CHANNEL", (width/2)-80,height-200,160,32);
	
	t2.setStyle({
		fillBgOn: color(255,0,255),
		rounding: 4,
		textSize: 15
	});
	
	
	
	t3 = createToggle("CHANGE CHANNEL", width-330,height-200,160,32);
	
	t3.setStyle({
		fillBgOn: color(255,0,255),
		rounding: 4,
		textSize: 15
	});
	
}



function centerCanvas() {

  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

}



function draw() {
	
	background(255);
	drawGui();
	// cursor('MousePointer.png');
	
	for(let i = 0; i < nickelodeonArray.length; i++) {
		nickelodeonArray[i].display();
	}
	
	for(let a = 0; a < commercialsArray.length; a++) {
		commercialsArray[a].display();
	}
	
	for(let b = 0; b < cNetworkArray.length; b++) {
		cNetworkArray[b].display();
	}
	
	image(tv,250,(height/2)+25,375,375);
	image(tv,width/2,(height/2)+25,375,375);
	image(tv,width-250,(height/2)+25,375,375);
	
}



function mousePressed() {
	
	let videos01 = videos01Array;
	let p = random(videos01);
	
	let newNickelodeon = new Nickelodeon(p);
	nickelodeonArray.push(newNickelodeon);
	
	
	
	let videos02 = videos02Array;
	let v = random(videos02);
	
	let newCommercials = new Commercials(v);
	commercialsArray.push(newCommercials);
	
	
	
	let videos03 = videos03Array;
	let n = random(videos03);
	
	let newCartoonNetwork = new CartoonNetwork(n);
	cNetworkArray.push(newCartoonNetwork);
	
}



// LEFT TELEVISION

class Nickelodeon {

	constructor(p) {
		
		this.p = p;
		this.x = 250;
		this.y = height/2;
		this.w = 300;
		this.h = 225;
		
	}
	
	display() {
		
		// IMAGE
		
		for(let i = 0; i < videos01Array.length; i++) {
			image(this.p, this.x, this.y, this.w, this.h);
		}
		
	}

}



// MIDDLE TELEVISION

class Commercials {

	constructor(v) {
		
		this.v = v;
		this.x = width/2;
		this.y = height/2;
		this.w = 300;
		this.h = 225;
		
	}
	
	display() {
		
		// IMAGE
		
		for(let a = 0; a < videos02Array.length; a++) {
			image(this.v, this.x, this.y, this.w, this.h);
		}
		
	}

}



// RIGHT TELEVISION

class CartoonNetwork {

	constructor(n) {
		
		this.n = n;
		this.x = width-250;
		this.y = height/2;
		this.w = 300;
		this.h = 225;
		
	}
	
	display() {
		
		// IMAGE
		
		for(let b = 0; b < videos03Array.length; b++) {
			image(this.n, this.x, this.y, this.w, this.h);
		}
		
	}

}