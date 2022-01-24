let minx = []; 
let miny = []; 
let hourx = []; 
var houry = [];
var secondx = 0;
var secondy = 60;

function setup() {
    createCanvas(800, 700);
	//hour setup per 8 rect 3 line
for(var i = 0; i < 24; i ++) { 
		if(i%8 == 0) { 
			hourx[i] = 40;
		}
		else { 
			hourx[i] = hourx[i - 1] + width/8;
		}
		if(i <= 7) { 
			houry[i] = height/15;
		}
		else { 
			houry[i] = houry[i - 8] + width/12;
		}
	}
  //minute setup 10 circle every row
    for(var i = 0; i < 60; i ++) { 
    	if(i%10 == 0) { 
    		minx[i] = 40;
    	}
    	else { 
    		minx[i] = minx[i - 1] + width/10;
    	}
    	if(i <= 9) { 
    		miny[i] = 2*height/5.3;
    	}
    	else { 
    		miny[i] = miny[i - 10] + width/12;
    	}
    }
}
function drawMinute() {
	fill(235,243,246);
	circle(0, 0, 13);
}

function drawSec() {
	fill(207,227,200);
	ellipse(0, 605, 20, 20);

}
function drawhour() {
	fill(244,229,188);
	rect(0, 0, 13);
}

function draw() {
	//different background for each section
	noStroke();
	background(206,182,196);
	fill(253,175,171);
	
	rect(0, height/3, width, 2*height/3);

	fill(255,214,134);
	
	rect(0, 625, width, 2*height/3);

	// draw minute and hour
	for(var i = 0; i < minute(); i ++) {
		push();
		translate(minx[i], miny[i]);
		drawMinute();
		pop();
	}
	for(var i = 0; i < hour(); i ++) {
		push();
		translate(hourx[i], houry[i]);
		drawhour();
		pop();
	}

	//  draw second move forweard per second
	push();
	translate(map(second(), 0, 60, -15, width), secondy);
	drawSec();
	pop();
}
