var DEV = false;

function Player(experience) {
	 this._experience = experience;
	 this._level;  
	
	this.getExperience = function(){
		return this._experience;
	}

	this.setExperience = function(value){
		this._experience += value;
		this._level = this.calculateLevel(this._experience);
	}

	this.getLevel = function(){
		return this._level;
	}

	this.calculateLevel = function(experience){
		var logBaseOnePointFive = Math.log(experience) / Math.log(1.5);
		return Math.floor(logBaseOnePointFive);
	}

	this.experienceToLevel = function(experience){
		var logBaseOnePointFive = Math.log(experience) / Math.log(1.5);
		//Get next level.
		var nextLevel = Math.floor(logBaseOnePointFive) + 1;
		var experienceForLevel = Math.floor(Math.pow(1.5,nextLevel));
		return experience + "/" + experienceForLevel; 
	}
}

if(DEV)
	module.exports = new Player(0);