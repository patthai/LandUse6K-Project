function table_initialize() 
      {
        	var table_output;//table_output
        	//call load&reformat JSON function and give add_to earth_function a callback
        	load_and_reformat_sheet_json(add_to_table);
        	//wait for callback  by load_and_reformat_sheet_json function
        	function add_to_table(output_json) //get JSON from google sheet via load_and_reformat_sheet_json
      			{
            		
            		//table header
            		table_output = "<table id=\"table\" class=\"ui celled padded table\"><thead><tr>";
            		$.each(output_json.object[0],function(i,item)// table item header
		 				{
		 				 	table_output = table_output + "<th>" + i + "</th>";
		 				});
		 					table_output = table_output + "</tr></thead>";
					
					//content
					for (i = 0; i< output_json.object.length; i++)
      								{
										var count = 1; //count 
										var num_parameter = Object.keys(output_json.object[0]).length;										
		 				 				$.each(output_json.object[i],function(x,row_data)// loop through each array
		 									{
		 									
		 									if (count == 1)// check if this is the beginning of the table
		 										{
		 											table_output = table_output +"<tr>";
		 										}
		 									table_output = table_output + "<td>"+row_data+"</td>";
		 									
		 									if (count == num_parameter)// check if this is the endning of the cell
		 										{
		 											table_output = table_output + "</tr>";
		 										}
		 									
		 									count++;

		 									});
      								}
      								$(".table").remove();
      								table_output = table_output + "</table>";
      								console.log(table_output);
      								$('#table_div').append(table_output);	
									//console.log(table_output);

      			}
      		
        
      }
      
      
      
      								