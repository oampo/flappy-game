var graphicsSystem = require('./systems/graphics');
var bird = require('./entities/birds');

var FlappyBird = function() {
	this.entities = [new bird.Bird()];
	this.graphics = new graphicsSystem.graphicsSystem(this.entities);
};

FlappyBird.prototype.run = function() {
	this.graphics.run();
};

exports.FlappyBird = FlappyBird;