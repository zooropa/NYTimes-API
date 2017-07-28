function apiget(){
    var choice = $('#dropDown').val();
    //NY Times API (1) --- START ---
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
      // NY Times API (1) --- END ---


      // Clear previous articles before adding new ones
      // use jquery instead: document.getElementById("piccontainer").innerHTML 
      // console.log($("#piccontainer")["0"].innerHTML);
      $("#piccontainer")["0"].innerHTML = "";
      // Add a new div for each article
      var article_counter = 0;
      for (var i=0; i < result.results.length && article_counter < 12; i++) {
      	// only show articles that have an image
        if(result.results[i].multimedia[4]) {
          var style = " style='background-image: url(" + result.results[i].multimedia[4].url + ")'";
          var abstract = result.results[i].abstract;
          $("#piccontainer")["0"].innerHTML += "<div class='pic'"+ style +"><div>"+ abstract +"</div></div>"
          article_counter++;
        }
      }
      // NY Times API (2) --- START ---
    }).fail(function(err) {
      throw err;
    });
    // NY Times API (2) --- END ---

}
