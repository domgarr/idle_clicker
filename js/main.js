

	if(localStorage.getItem("copperOreCount") == null)
		var oreCount = 0;

		var player = new Player(0);
		player.setExperience(10);
		
	

		if(localStorage.getItem("copperOreCount") != null);
		oreCount = localStorage.getItem("copperOreCount");

	
		function add()	{
			oreCount++; //Extract his to a copper ore object
			player.setExperience(2); 			
		}

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

	$(document).ready(function(){
    	$("#ore").click(function(){
        add();
        $("#text").attr("value", "" + oreCount);
        $("#experience-text").text(player.experienceToLevel(player.getExperience()));
        
    	});
	});