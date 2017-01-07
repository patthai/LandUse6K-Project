function load_all_project() {
    var sheet = 1;
    var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/" + sheet + "/public/basic?alt=json";
    var project_lists="";


    load_all_project.load_project = function load_project()
    {
        sheet = 1;
        $('#project_choices').remove();
        $('#dropdown_project').append("<select class=\"ui fluid search dropdown\"id =\"project_choices\"></select>");
        project_lists="";

        load_all_project.loop_project = function loop_project() {
            url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/" + sheet + "/public/basic?alt=json";
            $.getJSON(url, function (data) // Get JSON from google sheet
            {
                project_lists = project_lists + "<option>" + data.feed.title.$t + "</option>";
                sheet++;
                load_all_project.loop_project();

            })
                .done(function() {
                    //console.log('getJSON request succeeded!');
                })
                .fail(function(jqXHR, textStatus, errorThrown) {
                    console.log(project_lists);
                    $('#project_choices').append(project_lists);

                })
                .always(function() {
                    //console.log('getJSON request ended!');
                });




        }
        load_all_project.loop_project();

    }

    load_all_project.load_project();



}

