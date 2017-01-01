
 
 // ID of the Google Spreadsheet
 var spreadsheetID = "1cAti72QcHYbIuvufWIMWefHUV44Bobv3iXFkRVtpgJ0" ;
 
// link to JSON :  https://spreadsheets.google.com/feeds/list/1cAti72QcHYbIuvufWIMWefHUV44Bobv3iXFkRVtpgJ0/1/public/basic?alt=json
// link to the sheet : https://docs.google.com/spreadsheets/d/1cAti72QcHYbIuvufWIMWefHUV44Bobv3iXFkRVtpgJ0/edit#gid=1243367084
// link to google form : https://docs.google.com/a/asu.edu/forms/d/1c-Sn0e3CZif1H8tWCmMPWAcb3z0Rl_oFUsw04DTKspQ/edit

// URL of the google sheet
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/basic?alt=json";
 
 
// Get JSON from google sheet
  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/basic?alt=json";
 
 $.getJSON(url, function(data) {
 console.log(data);
 });
 
 

 