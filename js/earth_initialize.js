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
        	earth_initialize.load_earth_data = function load_earth_data(json) 
      		{        
				//console.log(json);
				viewer.entities.removeAll();//clear all data
				for (i = 0; i< json.object.length; i++)//loop through JSON
					{
					
				
					
					if(json.object[i].type == "event"){create_event(json);}
					
					//console.log(json.object[i].type);
					
					}
	
			}
			
			//load_earth_data from database
        	function create_event()
        		{
        		var redPolygon = viewer.entities.add(
        							{name : 'Red polygon on surface', 
        							polygon : {hierarchy : Cesium.Cartesian3.fromDegreesArray([]),
        							material : Cesium.Color.RED}
									});
				}
        	
        	////////////////////Initial Command/////////////////////
        	////////////////////Initial Command/////////////////////
        	////////////////////Initial Command/////////////////////
        	////////////////////Initial Command/////////////////////
        
        	
        	load_and_reformat_sheet_json(earth_initialize.load_earth_data);
        	
        	
        	
        	 
    	}
      
