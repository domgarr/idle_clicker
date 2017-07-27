<script type="text/javascript">
	if(localStorage.getItem("copperOreCount") == null)
		var oreCount = 0;
	else
		oreCount = localStorage.getItem("copperOreCount");
		function add()	{
			oreCount++;
			document.getElementById("text").value = oreCount;
		}

	    function save(){
	    	localStorage.setItem("copperOreCount", oreCount);
	    	localStorage.setItem("array", [1,2,3,4,5,6]);
	    }

	    function buy(){
	    	if(oreCount > 50)
	    		oreCount -= 50;
	    	 setInterval(function(){
	    	 	oreCount += 2;
	    	 	document.getElementById("text").value = oreCount;
	    	},2000)
	    }

	</script>