function Ore(name,experience,pictureUrl) {
	//Private Properties.
	this.name = name;
	this.experience = experience;
	this.pictureUrl = pictureUrl;

	this.getExperience = function(){
		return this.experience;
	}

	this.getPictureUrl = function(){
		return this.pictureUrl;
	}
}

