
// link to JSON :  https://spreadsheets.google.com/feeds/list/1cAti72QcHYbIuvufWIMWefHUV44Bobv3iXFkRVtpgJ0/1/public/basic?alt=json
// link to the sheet : https://docs.google.com/spreadsheets/d/1cAti72QcHYbIuvufWIMWefHUV44Bobv3iXFkRVtpgJ0/edit#gid=1243367084
// link to google form : https://docs.google.com/a/asu.edu/forms/d/1c-Sn0e3CZif1H8tWCmMPWAcb3z0Rl_oFUsw04DTKspQ/edit
// URL of the google sheet
function reformat_sheet_json(){
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/basic?alt=json";
var output_json = "{";// Initiate output JSON

 $.getJSON(url, function(data) // Get JSON from google sheet
 	{
	
		 $.each(data.feed.entry,function(i,column_data) // penetrate each row
		 	
		 {
		   output_json = output_json+"\"object"+i+"\": {";
		   
		
		 	//<-----converting column_data to string------>
		 	var item_string = column_data.content.$t; 
		 	
		 	item_string = item_string.replace(/\s/g, '');
		 	item_string = item_string.replace(/:/g,"\":\"");
		 	item_string = item_string.replace(/,/g,"\",\"");
		 	output_json = output_json+"\""+item_string+"\"},";
		 	
		 	//<-----converting column_data to string------>
		 	
				//$.each(row_item,function(categorie,item) // penetrate each row
		 		//	{
		 		//		console.log(item); 
		 				
		 		//	});
		 	
 
		});
		output_json = output_json.substring(0, output_json.length - 1);
		output_json = output_json+"}";
		
		//console.log(output_json);
		var json = JSON.parse(output_json);
		return json;
		console.log(json);
 	});


 //var row_item = JSON.parse("{\""+string+"\"}");
 }
 
 
 
 

 