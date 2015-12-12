var s = function( p ) {

	var angle = 0;
	var angularVelocity = 0;
	var angularAcceleration = 0.001;

	p.setup = function() {
		p.frameRate(60);
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.translate(p.windowWidth/2, p.windowHeight/2);
	}

	p.draw = function() {
		p.background(255);
		p.fill(175);
		p.stroke(0);
	  p.rotate(angle);
	  p.line(-50,0,50,0);
	  p.ellipse(50,0,8,8);
	  p.ellipse(-50,0,8,8);
	  angularVelocity += angularAcceleration;
	  angle += angularVelocity;
	}

	// auto-resize canvas to window size
	p.windowResized = function() {
  	p.resizeCanvas(p.windowWidth, p.windowHeight);
	}
};

var myp5 = new p5(s,'sketch');