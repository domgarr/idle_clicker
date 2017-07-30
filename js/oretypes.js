function OreTypes() {
	this.oreTypes = [];
	
	this.addOre = function(ore){
		this.oreTypes.push(ore);
	}
	this.getOre = function(index){
		return this.oreTypes[index];
	}

	this.count = function(){
		return this.oreTypes.length;
	}
}
