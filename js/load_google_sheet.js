// ID of the Google Spreadsheet
var spreadsheetID = "1cAti72QcHYbIuvufWIMWefHUV44Bobv3iXFkRVtpgJ0" ;
 
// link to JSON :  https://spreadsheets.google.com/feeds/list/1cAti72QcHYbIuvufWIMWefHUV44Bobv3iXFkRVtpgJ0/1/public/basic?alt=json
// link to the sheet : https://docs.google.com/spreadsheets/d/1cAti72QcHYbIuvufWIMWefHUV44Bobv3iXFkRVtpgJ0/edit#gid=1243367084
// link to google form : https://docs.google.com/a/asu.edu/forms/d/1c-Sn0e3CZif1H8tWCmMPWAcb3z0Rl_oFUsw04DTKspQ/edit
// URL of the google sheet

var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/basic?alt=json";
 
// Get JSON from google sheet
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/basic?alt=json";
 
 $.getJSON(url, function(data) 
 	{
	//console.log(data); 
	// print out data from google sheet
		 $.each(data.feed.entry,function(i,column_data) // penetrate each row
		 	
		 {
		 	//converting column_data to string
		 	var string = column_data.content.$t; 
		 	string = string.replace(/:/g,"\":\"");
		 	string = string.replace(/,/g,"\",\"");
		 	var row_item = JSON.parse("{\""+string+"\"}");
		 	
		 	//creating header
		 	if (i == 0)
		 		{
			 		   	$('#report').append('<tr>');
			 			$.each(row_item,function(categorie,item) // penetrate each row
		 					{
		 						console.log(item); 
			 					$('#report').append('<th>'+categorie+'</th>');
		
		 					});
						$('#report').append('/<tr>');
			
				}
				
			//creating table for each items
			$('#report').append('<tr>');
				$.each(row_item,function(categorie,item) // penetrate each row
		 			{
		 				console.log(item); 
		 				$('#report').append('<td>'+item+'</td>');
		 			});
		 	$('#report').append('/<tr>');
		 	
 
		});
 	});
 
 

 