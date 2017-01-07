function load_all_project() {
    var sheet = 1;
    var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/" + sheet + "/public/basic?alt=json";
    var project_lists="";

    load_all_project.export_project_name = function export_project_name()
    {
        $('#project_choices').remove();
        $('#list_of_projects').append(project_lists);
        project_lists="";

    }

    load_all_project.loop_project = function loop_project()
    {   url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/" + sheet + "/public/basic?alt=json";
        $.getJSON(url, function(data) // Get JSON from google sheet
        {//console.log(data.feed.title.$t);

                if (data != null)
                    {
                        project_lists = project_lists + "<option id=\"project_choices\">" + data.feed.title.$t + "</option>";
                        sheet++;
                        load_all_project.loop_project();
                        console.log(project_lists);
                    }

            load_all_project.export_project_name();
            console.log("NULLLLLL");


        });
    }


    load_all_project.loop_project();



}