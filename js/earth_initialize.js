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
          earth_initialize.create_elements = function create_elements(json, i)
          {

                      var new_location = json.object[i].location.split(',');
                      var new_data_name = json.object[i].title;
                      var new_id = json.object[i].id;

                      if(json.object[i].type == "event"){create_event(new_data_name, new_location,new_id);}
          }


        	//load_earth_data from database
        	earth_initialize.load_earth_data = function load_earth_data() 
      		{        
				load_and_reformat_sheet_json(load_data);
				function load_data(json)
				{
				
					viewer.entities.removeAll();//clear all data
					for (i = 0; i< json.object.length; i++)//loop through JSON
					{

                        earth_initialize.create_elements(json, i);
					}
				}
	
			}

          //load_earth_data from database with boundary
          earth_initialize.load_earth_boundary = function load_earth_boundary(boundary_start,boundary_end)
          {
              load_and_reformat_sheet_json(load_data);
              function load_data(json)
              {

                  viewer.entities.removeAll();//clear all data
                  for (i = 0; i< json.object.length; i++)//loop through JSON
                  {
					  if (json.object[i].year >= boundary_start && json.object[i].endyear <= boundary_end)
					  {
                          earth_initialize.create_elements(json, i);
                          //console.log("start year" + json.object[i].year + "end year" + json.object[i].endyear );
					  }


                  }
              }

          }



			/////////////////Different models////////////////
          	/////////////////Different models////////////////
			/////////////////Different models////////////////
        	function create_event(new_data_name, new_location, new_id)
        		{
        		var object_item = viewer.entities.add(
        							{name : new_data_name,
        							polygon : {hierarchy : Cesium.Cartesian3.fromDegreesArray(new_location),
        							material : Cesium.Color.RED},
									id : new_id
									});
				}











		  ///////////////////Fly to///////////////////////////
          earth_initialize.flyto = function flyto() {
              var target = viewer.entities.getById(3);
              console.log(target);
              viewer.camera.flyTo(target,{duration : 20.0});
          }






          ////////////////////Initial Command/////////////////////
        	////////////////////Initial Command/////////////////////
        	////////////////////Initial Command/////////////////////
        	////////////////////Initial Command/////////////////////
        
        	earth_initialize.load_earth_data();

        	
        	
        	
        	 
    	}
      
