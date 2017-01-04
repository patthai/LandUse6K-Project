
// link to JSON :  https://spreadsheets.google.com/feeds/list/1cAti72QcHYbIuvufWIMWefHUV44Bobv3iXFkRVtpgJ0/1/public/basic?alt=json
// link to the sheet : https://docs.google.com/spreadsheets/d/1cAti72QcHYbIuvufWIMWefHUV44Bobv3iXFkRVtpgJ0/edit#gid=1243367084
// link to google form : https://docs.google.com/a/asu.edu/forms/d/1c-Sn0e3CZif1H8tWCmMPWAcb3z0Rl_oFUsw04DTKspQ/edit
// URL of the google sheet
function load_and_reformat_sheet_json(func){
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/basic?alt=json";
var output_json = "{\"object\":[";// Initiate output JSON
var found_semicolon = "false";

 $.getJSON(url, function(data) // Get JSON from google sheet
 	{
		
		 $.each(data.feed.entry,function(i,column_data) // penetrate each row
		 	
		 {
		   output_json = output_json+"{";
		   
		
		 	//<-----converting column_data to string------>
		 	var item_string = column_data.content.$t; 
		 	
		 	item_string = item_string.replace(/\s/g, '');
		 	item_string = item_string.replace(/:/g,"\":\"");
		 	
		 	for (var i = item_string.length; i > 0; i--)// accomodate colon in the data. We need to add " between colon, but not every colon!
		 		{
  				if (item_string[i] == ":")
  					{
  					found_semicolon = "true";
  					}
  				
  				if (found_semicolon == "true")
  					{
  					if (item_string[i] == ",")
  						{
  						item_string = [item_string.slice(0, i), "\"", item_string[i], "\"",item_string.slice(i+1)].join('');
  						found_semicolon = "false";
  						}
  					}
				}

		 	output_json = output_json+"\""+item_string+"\"},";
		 	
		 	
		 	//<-----converting column_data to string------>
		 	
 
		});
		output_json = output_json.substring(0, output_json.length - 1);
		output_json = output_json+"]}";
		
		//console.log(output_json); 
		//EXPORT JSON TEST
		
		var json = JSON.parse(output_json);
		
		//return JSON object to the given callback function
		func(json);
		
		
 	});

}
 
 
 
 

 