var assert = require('chai').assert;

var player = require('../js/player');

describe('Player', function(){

	it('player should return 0 experience', function(){
 		assert.equal(player.getExperience(), 0);
	});

	it('experience should be of type number', function(){
		assert.typeOf(player.getExperience(),'number');
	});

	it('Setting experience to 10 should return 10 expereince', function(){
		player.setExperience(10);
		assert.equal(player.getExperience(), 10);
	});

	it("Level Calculator should return 20 when given 3400 experience.", function(){
		assert.equal(player.calculateLevel(3400), 20);
	})

	it("When setting a player's experience to 3400 his level should be 20", function(){
		
		player.setExperience(3400);
		assert.equal(player.getLevel(), 20);
	});

	it("When i input 3400, a string should be returned '3400/4987' ", function(){
		assert.equal(player.experienceToLevel(3400), "3400/4987");
	});



});