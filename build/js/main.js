var graphicsSystem=require("./systems/graphics"),bird=require("./entities/bird"),FlappyBird=function(){this.entities=[new bird.Bird],this.graphics=new graphicsSystem.graphicsSystem(this.entities)};FlappyBird.prototype.run=function(){this.graphics.run()},exports.FlappyBird=FlappyBird,$(document).ready(function(){var i=require("./flappy_bird");document.addEventListener("DOMContentLoaded",function(){var r=new i.FlappyBird;r.run})});