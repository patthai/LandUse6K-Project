function load_all_project() {
    var sheet = 1;
    var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/" + sheet + "/public/basic?alt=json";
    var project_lists="";


    load_all_project.load_project = function load_project()
    {

        $('#project_choices').remove();
        sheet = 1;
        $('#dropdown_project').append("<select class=\"ui fluid search dropdown\"id =\"project_choices\"  ><option>Select project</option></select>");
        project_lists="";

        load_all_project.loop_project = function loop_project() {
            url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/" + sheet + "/public/basic?alt=json";
            $.getJSON(url, function (data) // Get JSON from google sheet
            {
                project_lists = project_lists + "<option value=\"" + sheet + "\">"+ data.feed.title.$t + "</option>";

                sheet++;
                load_all_project.loop_project();

            })
                .done(function() {
                    //console.log('getJSON request succeeded!');
                })
                .fail(function(jqXHR, textStatus, errorThrown) {
                    $('#project_choices').append(project_lists);

                })
                .always(function() {
                    //console.log('getJSON request ended!');
                });




        }
        load_all_project.loop_project();

    }

    load_all_project.load_project();



    $(".ui.dropdown").dropdown({onChange:function(value,text){
        var project_id = $('.ui.dropdown').dropdown('get value');
        load_ui(project_id);


    }});



}







