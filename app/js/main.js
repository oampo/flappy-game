

document.addEventListener('DOMContentLoaded', function(){
	var flappyBird = require('./flappy_bird');
	var app = new flappyBird.FlappyBird();
	app.run();
	
});