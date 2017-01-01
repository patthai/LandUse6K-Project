      function initialize() {
        var earth = new WE.map('earth_div');
        WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);

        var marker = WE.marker([51.5, -0.09]).addTo(earth);
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 150, closeButton: true}).openPopup();

        var marker2 = WE.marker([30.058056, 31.228889]).addTo(earth);
        marker2.bindPopup("<b>Cairo</b><br>Yay, you found me!", {maxWidth: 120, closeButton: false});
		
		var markerArray = [];
       

        earth.setView([51.505, 0], 2);
        
        //call load&reformat JSON function and give add_to earth_function a callback
        load_and_reformat_sheet_json(add_to_earth);
        
      }
      
      function add_to_earth(output_json) 
      {
      console.log(output_json);
      
      }
      
      
      