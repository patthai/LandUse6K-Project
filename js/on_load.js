function on_load()
{
    load_all_project();
    table();
    timeline();
    //earth_initialize();



}

function load_ui(project_id)
{
    select_project = project_id;
    //load_all_project.load_project();
    table();
    timeline.timeline_load();
    //earth_initialize.load_earth_data();

}