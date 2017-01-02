function earth_initialize() 
      {
        	var earth = new WE.map('earth_div');
        	WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);
       		earth.setView([51.505, 0], 2);
       		
       		//function load earth data from google sheet
       		earth_initialize.load_earth_data = function load_earth_data() 
      		{        
        		
        		//call load&reformat JSON function and give add_to earth_function a callback
        		load_and_reformat_sheet_json(add_to_earth);
        		//wait for callback  by load_and_reformat_sheet_json function
        		function add_to_earth(output_json) //get JSON from google sheet via load_and_reformat_sheet_json
      			{
        			
            		for (i = 0; i< output_json.object.length; i++)
      					{
            		
		 						var lng = output_json.object[i].locationx;
								var lat = output_json.object[i].locationy;
								var name = output_json.object[i].name;
								var time = output_json.object[i].time;
								var thisMarker = WE.marker([lat,lng]).addTo(earth);
								thisMarker.bindPopup('<h3>' + name + '</h3>' + time, {maxWidth: 120, closeButton: true});
								console.log(WE.marker);

								
		 				}
      			}
      		};
      		earth_initialize.load_earth_data();
      		

      }
      
