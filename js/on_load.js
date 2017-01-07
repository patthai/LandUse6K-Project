function on_load()
{
    load_all_project();
    table();
    timeline();
    //earth_initialize();



}

function load_ui()
{
    load_all_project.load_project();
    table();
    timeline.timeline_load();
    //earth_initialize.load_earth_data();
    console.log("HEE");

}