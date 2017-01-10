function timeline() {
// DOM element where the Timeline will be attached
    var container = document.getElementById('timeline_div');
    var items = new vis.DataSet([]);
    var initiate = 0;




    timeline.timeline_load = function timeline_load(){
        items.clear([]);


        load_and_reformat_sheet_json(initiate_to_timeline); //wait for callback  by load_and_reformat_sheet_json function
         function initiate_to_timeline(json) //get JSON from google sheet via load_and_reformat_sheet_json
        {
        for (i = 0; i < json.object.length; i++)//loop through JSON
            {

                var id = json.object[i].id;
                var title = json.object[i].title;
                var start_year = json.object[i].year;
                var end_year = json.object[i].endyear;

            items.add([
                { id: id, content: title, start: start_year, end: end_year}

            ]);
            }



            if (initiate == 0){
                // Configuration for the Timeline
                var options = {};
                // Create a Timeline
                var timeline = new vis.Timeline(container, items, options);
                initiate = 1;

                timeline.on('select', function (properties) {
                    var get_id = properties.items[0];
                    var all = items.get();
                    var select_item = all[get_id];
                    description(select_item.id);

                    //for earth
                    //console.log("b_start = " + select_item.start + "b_end = " + select_item.end);
                    earth_initialize.load_earth_boundary(select_item.start,select_item.end);
                    //earth_initialize.flyto();

                });
                timeline.on('select', onSelect);

            }

        }
    }

    timeline.timeline_load();







}

