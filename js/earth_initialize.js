function initialize() 
      {
        	var earth = new WE.map('earth_div');
        	WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);
    		var markerArray = [];
       		earth.setView([51.505, 0], 2);
        
        	//call load&reformat JSON function and give add_to earth_function a callback
        	load_and_reformat_sheet_json(add_to_earth);
        	//wait for callback  by load_and_reformat_sheet_json function
        	function add_to_earth(output_json) //get JSON from google sheet via load_and_reformat_sheet_json
      			{
            		$.each(output_json,function(i,column_data)// loop through each array
		 				{
		 				var lng = column_data.locationx;
						var lat = column_data.locationy;
						var name = column_data.name;
						var time = column_data.time;
						var thisMarker = WE.marker([lat,lng]).addTo(earth);
						thisMarker.bindPopup('<h3>' + name + '</h3>' + time, {maxWidth: 120, closeButton: true});
						markerArray.push(thisMarker);

		 				});
      			}	
        
      }
      
      
      
      
      
      
      