function load_timeline() {
// DOM element where the Timeline will be attached
    var container = document.getElementById('timeline');

    var items = new vis.DataSet([]);




    load_and_reformat_sheet_json(initiate_to_timeline);
    //wait for callback  by load_and_reformat_sheet_json function
    function initiate_to_timeline(json) //get JSON from google sheet via load_and_reformat_sheet_json
    {
        for (i = 0; i < json.object.length; i++)//loop through JSON
        {
            var title = json.object[i].headline;
            var start_year = json.object[i].year;
            var end_year = json.object[i].endyear;

            items.add([
                { content: title, start: start_year, end: end_year}

            ]);
        }
    }

    items.add([
        { content: 'item 1<br>start', start: '2014-01-23'}

    ]);

// Create a DataSet (allows two way data-binding)


// Configuration for the Timeline
    var options = {};

// Create a Timeline
    var timeline = new vis.Timeline(container, items, options);

}