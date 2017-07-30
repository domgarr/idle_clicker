var DEV = false;

function Player(experience) {
	 //Underscores not needed anymore.
	 this.experience = experience;
	 this.level;
	 this.percentage;
	 this.oreCount = 0; 
	 this.LOG_BASE = 1.25; 
	
	 this.getOreCount = function(){
	 	return this.oreCount;
	 }

	 this.setOreCount = function(value){
	 	this.oreCount += parseInt(value);
	 }

	this.getExperience = function(){
		return this.experience;
	}

	this.setExperience = function(value){
		this.experience += value;
		this.level = this.calculateLevel(this.experience);
	}

	this.getLevel = function(){
		return this.level;
	}

	this.calculateLevel = function(experience){
		var logBaseOnePointFive = Math.log(experience) / Math.log(this.LOG_BASE);
		return Math.floor(logBaseOnePointFive);
	}

	this.experienceToLevel = function(experience){
		var logBaseOnePointFive = Math.log(experience) / Math.log(this.LOG_BASE);
		//Get next level.
		var currentLevel = Math.floor(logBaseOnePointFive);
		var nextLevel = currentLevel + 1;

		var experienceForPreviousLevel = Math.floor(Math.pow(this.LOG_BASE,currentLevel));
		var experienceForLevel = Math.floor(Math.pow(this.LOG_BASE,nextLevel));
		
		var totalExperienceNeededToLevel = experienceForLevel - experienceForPreviousLevel;
		var experienceToNextLevel = experience - experienceForPreviousLevel;

		this.percentage = Math.floor(100 *(experienceToNextLevel / totalExperienceNeededToLevel)); 
		
		return experience + "/" + experienceForLevel; 
	}
	//experienceToLevel has to be called first before calling getPercentageLevel.
	this.getPercentageToLevel = function(){
		return this.percentage;
	}
}

if(DEV)
	module.exports = new Player(0);