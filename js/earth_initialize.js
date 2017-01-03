function earth_initialize() 
      {		
			//load earth model
			var imageryProviders = Cesium.createDefaultImageryProviderViewModels();
			imageryProviders.splice(0, 3);
			imageryProviders.splice(3, 3);	
			
			
			var selectedImageryProviderIndex = 0;
        	var viewer = new Cesium.Viewer('cesiumContainer', 
        					{
        					imageryProviderViewModels: imageryProviders,
        					selectedImageryProviderViewModel: imageryProviders[selectedImageryProviderIndex],
        					vrButton: true,
        					
        					});
        	console.log('hello');
        	
        	
        	
        	
        	//load_object from database
        	var redPolygon = viewer.entities.add({
    			name : 'Red polygon on surface',
    			polygon : {hierarchy : Cesium.Cartesian3.fromDegreesArray
    													([-115.0, 37.0,
                                                        -115.0, 32.0,
                                                        -107.0, 33.0,
                                                        -102.0, 31.0,
                                                        -102.0, 35.0]),
        							material : Cesium.Color.RED
    								}


									});
			//load_object from database
        	
        	
        	
        	 
    	}
      
