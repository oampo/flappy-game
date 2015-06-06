var graphicsSystem = require('./js/systems/graphics');
var bird = require('./js/entities/bird');
var pipe = require('./js/entities/pipe');

var FlappyBird = function() {
	this.entities = [new bird.Bird()];
	this.entities = [new pipe.Pipe()];
	this.graphics = new graphicsSystem.graphicsSystem(this.entities);
};

FlappyBird.prototype.run = function() {
	this.graphics.run();
};

exports.FlappyBird = FlappyBird;