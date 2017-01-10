function description(select_item_id)
{
    //INITIATION!

    var description_output;//table_output for HTML
    //call load&reformat JSON function and give add_to earth_function a callback
    load_and_reformat_sheet_json(add_to_description);
    //wait for callback  by load_and_reformat_sheet_json function

    function add_to_description(output_json) //get JSON from google sheet via load_and_reformat_sheet_json
    {
            description_output = "<table id=\"description_table\" class=\"ui celled striped table\"><tbody>";

            $.each(output_json.object[select_item_id],function(x,row_data)// loop through each array
            {

                description_output = description_output + "<tr><td>" + x + "</td><td class=\"left aligned\">" + row_data + "</td> </tr>";



            });


        //export table to html
        $("#description_table").remove();
        description_output = description_output + "</tbody></table>";

        $('#description_div').append(description_output);
        //console.log(description_output);

    }


}


