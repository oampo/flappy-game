

document.addEventListener('DOMContentLoaded', function(){
	var flappyBird = require('./js/flappy_bird');
	var app = new flappyBird.FlappyBird();
	app.run();
	
});