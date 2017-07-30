/*
Object Literal Pattern:
https://www.youtube.com/watch?v=m-NYyst_tiY&t=293s
SOME RULES:
self-contained module
	-no global variables
	-if a module manages more than one thing it should be split up. 
	-seperation of concerns
Don't repeat your self
Efficient DOM usage
	-very few selects.
No memory leaks.
	-all events should be unbound.
*/

$(document).ready(function(){
	//Efficient Dom Usage 
	(function() {
		var game = {
			player: new Player(0),
			oreTypes: new OreTypes(),
			index: 0,
			cacheDom : function(){
				this.$oreQuantityText = $("#ore-quantity-text");
				this.$oreClickSpot = $("#ore-click-spot");
				this.$experienceText = $("#experience-text");
				this.$experienceBar = $("#experience-bar");
				this.$levelText = $("#level-text");
				this.$orePicture = $("#ore-picture");
				this.$nextButton = $("#next-button");
				this.$prevButton = $("#prev-button");
			},
			initPlayer: function(){
				if(localStorage.getItem("copperOreCount") != null)
					this.player.setOreCount(localStorage.getItem("copperOreCount"));		
			},
			//TODO: Extract method to OreType class.
			initOre: function(){
				this.oreTypes.addOre(new Ore("Copper",2,"../pictures/ores/copper_ore.png"));
		  		this.oreTypes.addOre(new Ore("Tin",4,"../pictures/ores/tin_ore.png"));
		  		this.oreTypes.addOre(new Ore("Coal",12,"../pictures/ores/coal_ore.png"));
		  		this.oreTypes.addOre(new Ore("Mithril",44,"../pictures/ores/mithril_ore.png"));
		  		this.oreTypes.addOre(new Ore("Adamantite",100,"../pictures/ores/adamant_ore.png"));
		  		this.oreTypes.addOre(new Ore("Runite",100000000,"../pictures/ores/runite_ore.png"));

			},
			render: function(){
				this.$oreQuantityText.attr("value","" + this.player.getOreCount());
				this.$experienceText.text(this.player.experienceToLevel(this.player.getExperience()));
				this.$experienceBar.attr("style", "width:" + this.player.getPercentageToLevel() +'%');
				this.$levelText.text(this.player.getLevel());
				//Maybe seperate method since this doesn't change very often.
				this.$orePicture.attr("src", this.oreTypes.getOre(this.index).getPictureUrl());
			},
			addOre: function(){
				this.player.setOreCount(3); //Rename since its incrementing not setting.
				this.player.setExperience(this.oreTypes.getOre(this.index).getExperience());
				this.render();
			},
			bindEvents : function(){
				 this.$oreClickSpot.click(this.addOre.bind(this));
				 this.$nextButton.click(this.nextOre.bind(this));
				 this.$prevButton.click(this.prevOre.bind(this));
			},
			init: function(){
				this.initPlayer();
				this.initOre();
				this.cacheDom();
				this.bindEvents();
				this.render();
			},
			nextOre: function(){
				if(this.index == this.oreTypes.count() - 1) return;
				this.index++;
				this.render();
			},
			prevOre: function(){
				if(this.index == 0) return;
				this.index--;
				this.render();
			}
		}	
		game.init();
	})()
});
/*
	    function save(){
	    	localStorage.setItem("copperOreCount", oreCount);
	    } 

	    function buy(){
	    	if(oreCount > 50)
	    		oreCount -= 50;
	    	 setInterval(function(){
	    	 	oreCount += 2;
	    	 	document.getElementById("text").value = oreCount;
	    	},2000)
	    }
*/