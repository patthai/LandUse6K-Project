function table() 
      {
        	//INITIATION!
        	//INITIATION!
        	//INITIATION!
        	//INITIATION!
        	
        	var table_output;//table_output for HTML
        	//call load&reformat JSON function and give add_to earth_function a callback
        	load_and_reformat_sheet_json(add_to_table);
        	//wait for callback  by load_and_reformat_sheet_json function
        	function add_to_table(output_json) //get JSON from google sheet via load_and_reformat_sheet_json
      			{
            		
            		//table header displayer
            		table_output = "<table id=\"table\" class=\"ui table\"><thead><tr>";
            		$.each(output_json.object[0],function(i,item)// table item header
		 				{
		 				 	table_output = table_output + "<th>" + i + "</th>";
		 				});
		 					table_output = table_output + "</tr></thead>";
					
					//content displayer 
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
		 									
		 									if (count == num_parameter)// check if this is the ending of the cell
		 										{
		 											table_output = table_output +"</tr>";
		 										}
		 									
		 									count++;

		 									});
      								}
      								//export table to html
      								$(".table").remove();
      								table_output = table_output + "</table>";
      								$('#table_div').append(table_output);	
									

      			}
      			


        
      }

      
						