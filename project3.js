
function click(){


	var ourRequest = new XMLHttpRequest ();
    var url = "https://api.nytimes.com/svc/topstories/v2/food.json";

    ourRequest.open('GET', 'https://api.nytimes.com/svc/topstories/v2/food.json' );

    url += '?' + $.param({
    'api-key': "bc26c8e91bf445e388e87441a3b3219d"
    });

    $.ajax({
    url: url,
    method: 'GET',

    }).done(function(result) {
    console.log(result);
    }).fail(function(err) {
    throw err;

    });

};

// SHOVAL'S CODE


function apiget(){
    var choice = $('#dropDown').val();
    var url = "https://api.nytimes.com/svc/topstories/v2/"+choice+".json";
    console.log("DEBUG: " + url);
    url += '?' + $.param({
      'api-key': "bc26c8e91bf445e388e87441a3b3219d"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
     
      console.log(result);

      // Clear previous articles before adding new ones 
      $("#piccontainer")["0"].innerHTML = "";
      // Add a new div for each article
      for (var i=0; i < result.results.length; i++) {
        // only show articles that have an image
        if(result.results[i].multimedia[4]) {
          var style = " style='background-image: url(" + result.results[i].multimedia[4].url + ")'";
          var abstract = result.results[i].abstract;
          $("#piccontainer")["0"].innerHTML += "<div class='pic'"+ style +">"+ abstract +"</div>"
        }
      }

    }).fail(function(err) {
      throw err;
    });
    

}
