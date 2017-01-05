function earth_initialize() 
      {		
			//load earth model
			var imageryProviders = Cesium.createDefaultImageryProviderViewModels();
			imageryProviders.splice(0, 3);
			imageryProviders.splice(3, 3);	
			
			//modify earth widget
			var selectedImageryProviderIndex = 0;
        	var viewer = new Cesium.Viewer('cesiumContainer', 
        					{
        					imageryProviderViewModels: imageryProviders,
        					selectedImageryProviderViewModel: imageryProviders[selectedImageryProviderIndex],
        					vrButton: true,
        					
        					});
        	
        	
        	
        	//////////////////////////MODULE///////////////////////
        	//////////////////////////MODULE///////////////////////
        	//////////////////////////MODULE///////////////////////
        	//////////////////////////MODULE///////////////////////
        	
        	//load_earth_data from database
        	earth_initialize.load_earth_data = function load_earth_data() 
      		{        
				load_and_reformat_sheet_json(load_data);
				function load_data(json)
				{
				
					viewer.entities.removeAll();//clear all data
					for (i = 0; i< json.object.length; i++)//loop through JSON
					{
						var new_data_name = json.object[i].name;
						var new_location = json.object[i].location.split(',');
					
						if(json.object[i].type == "event"){create_event(new_data_name, new_location);}
					
					
					}
				}
	
			}
			
			//load_earth_data from database
        	function create_event(new_data_name, new_location)
        		{
        		var redPolygon = viewer.entities.add(
        							{name : new_data_name, 
        							polygon : {hierarchy : Cesium.Cartesian3.fromDegreesArray(new_location),
        							material : Cesium.Color.RED}
									});
				}
        	
        	////////////////////Initial Command/////////////////////
        	////////////////////Initial Command/////////////////////
        	////////////////////Initial Command/////////////////////
        	////////////////////Initial Command/////////////////////
        
        	earth_initialize.load_earth_data();
        	
        	
        	
        	
        	 
    	}
      
